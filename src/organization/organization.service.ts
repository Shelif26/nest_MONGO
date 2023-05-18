/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Organization } from './entities/organization.entity';
import { createOrgInput } from './dto/org.type';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private orgRepository: MongoRepository<Organization>,
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
}
