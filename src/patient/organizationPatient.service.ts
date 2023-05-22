/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { OrganizationPatient } from './entities/orgPatient.entity';
import { createOrganizationInput } from './dto/organizationPatient.type';
import { Organization } from 'src/organization/entities/organization.entity';
import { Patient } from './entities/patient.enity';

@Injectable()
export class OrganizationpatientService {
  constructor(
    @InjectRepository(OrganizationPatient)
    private OrganizationPatientRepository: MongoRepository<OrganizationPatient>,
    @InjectRepository(Organization)
    private OrganizationRepository: MongoRepository<Organization>,
    @InjectRepository(Patient)
    private patientRepository: MongoRepository<Patient>,
  ) {}
  async greetfromOrgPatient(): Promise<string> {
    return 'Hello this the service class for the Organization patient service';
  }

  async getPatientOrgAssociation(orgPatientId: string) {
    console.log(orgPatientId);
    const r = await this.OrganizationPatientRepository.findOne({
      where: { orgPatientId: orgPatientId },
    });
    console.log(r);
    const fetchedOrgPatient =
      await this.OrganizationPatientRepository.aggregate([
        {
          $match: {
            orgPatientId: orgPatientId,
          },
        },
        {
          $lookup: {
            from: 'organization',
            localField: 'orgId',
            foreignField: 'orgId',
            as: 'organization',
          },
        },
        {
          $unwind: '$organization',
        },
        {
          $lookup: {
            from: 'patient',
            localField: 'patientId',
            foreignField: 'patientId',
            as: 'patient',
          },
        },
        {
          $unwind: '$patient',
        },
        {
          $project: {
            orgPatientId: 1,
            patientId: 1,
            orgId: 1,
            active: 1,
            organization: {
              orgId: '$organization.orgId',
              name: '$organization.name',
              orgType: '$organization.orgType',
              npi: '$organization.npi',
            },
            patient: {
              patientId: '$patient.patientId',
              firstName: '$patient.firstName',
              lastName: '$patient.lastName',
              dateOfBirth: '$patient.dateOfBirth',
              addresses: '$patient.addresses',
              phones: '$patient.phones',
            },
          },
        },
      ]).toArray();

    return fetchedOrgPatient[0];
  }

  async createOrgPatient(input: createOrganizationInput) {
    try {
      const isOrganizationExist = await this.OrganizationRepository.findOne({
        where: { orgId: input.orgId },
      });

      if (!isOrganizationExist) {
        console.log('Organization not exist');
        throw new Error('Organization not exist');
      }

      const isPatientExist = await this.patientRepository.findOne({
        where: { patientId: input.patientId },
      });

      if (!isPatientExist) {
        console.log('Patient not exist');
        throw new Error('Patient not exist');
      }

      const ifOrgPatientExist =
        await this.OrganizationPatientRepository.findOne({
          where: { orgId: input.orgId, patientId: input.patientId },
        });

      const createdOrgPatient = !ifOrgPatientExist
        ? this.OrganizationPatientRepository.save({
            orgPatientId: uuidv4(),
            orgId: input.orgId,
            patientId: input.patientId,
            active: input.active,
          })
        : console.log('Patient Oraganization already exist');

      return createdOrgPatient;
    } catch (err) {
      console.log('Sometihng went wrong while creating association', err);
    }
  }
}
