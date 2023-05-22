/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Organization } from './entities/organization.entity';
import { createOrgInput } from './dto/org.type';
import { OrganizationPatient } from 'src/patient/entities/orgPatient.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private orgRepository: MongoRepository<Organization>,
    @InjectRepository(OrganizationPatient)
    private OrganizationPatientRepository: MongoRepository<OrganizationPatient>,
  ) {}

  async greet(): Promise<string> {
    return 'Hello this the service class for the patient service';
  }

  async findOrg(uuid: string): Promise<Organization> {
    const existingData = await this.orgRepository.findOne({
      where: { orgId: uuid },
    });
    console.log(existingData);
    return existingData;
  }

  async createOrg(input: createOrgInput): Promise<Organization> {
    const createdOrg = await this.orgRepository.save({
      orgId: uuidv4(),
      name: input.name,
      orgType: input.orgType,
      npi: input.npi,
    });

    return createdOrg;
  }

  async getAllPatientOrganization(orgId: string) {
    console.log(orgId);
    const isOrgExist = await this.orgRepository.findOne({
      where: { orgId: orgId },
    });

    if (!isOrgExist) {
      console.log(`Organization not found :${orgId}`);
      throw new Error(`Organization not found :${orgId}`);
    }

    const fetchedData = await this.OrganizationPatientRepository
      .aggregate([
        {
          $match: { orgId: orgId },
        },
        {
          $lookup: {
            from: 'patient',
            localField: 'patientId',
            foreignField: 'patientId',
            as: 'patientData',
          },
        },
        {
          $project: {
            _id: 0,
            orgPatientId: '$orgPatientId',
            orgId: '$orgId',
            patientId: '$patientId',
            active: '$active',
            patientData: { $arrayElemAt: ['$patientData', 0] },
          },
        },
      ])
      .toArray();

    console.log('fetched data from the DB', fetchedData);
    return fetchedData;
  }
}
