import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { OrganizationFacility } from './entities/orgFacility.entity';
import { createOrganizationInput } from './dto/organizationFacility.type';
import { Facility } from './entities/facility.entity';
import { Organization } from 'src/organization/entities/organization.entity';

@Injectable()
export class OrganizationFacilityService {
  constructor(
    @InjectRepository(OrganizationFacility)
    private OrganizationfacilityRepository: MongoRepository<OrganizationFacility>,
    @InjectRepository(Facility)
    private FacilityRepository: MongoRepository<Facility>,
    @InjectRepository(Organization)
    private OrganizationRepository: MongoRepository<Organization>,
  ) {}
  async greet(): Promise<string> {
    return 'Hello this the service class for the patient service';
  }

  async createOrgFacility(
    input: createOrganizationInput,
  ): Promise<OrganizationFacility> {
    try {
      const existingOrganization = await this.OrganizationRepository.findOne({
        where: { orgId: input.orgId },
      });
      const existingFacility = await this.FacilityRepository.findOne({
        where: { facilityId: input.facilityId },
      });

      const isExistingData = await this.OrganizationfacilityRepository.findOne({
        where: { orgId: input.orgId, facilityId: input.facilityId },
      });

      const organizationFound = existingOrganization ? true : false;
      const facilityFound = existingFacility ? true : false;

      const organizationFacilityExists = isExistingData ? true : false;

      if (!organizationFound || !facilityFound) {
        console.log('Organization or Facility not found');
        throw new Error('Organization or Facility not found');
      }

      if (organizationFacilityExists) {
        console.log('OrganizationFacility already exists');
        throw new Error('OrganizationFacility already exists');
      }

      const createdFacility = await this.OrganizationfacilityRepository.save({
        orgFacilityId: uuidv4(),
        orgId: input.orgId,
        facilityId: input.facilityId,
        active: input.active,
      });

      return createdFacility;
    } catch (error) {
      throw new Error('Failed to create OrganizationFacility');
    }
  }
}
