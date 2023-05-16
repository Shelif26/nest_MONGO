import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Facility } from './entities/facility.entity';
import { OrganizationFacility } from './entities/orgFacility.entity';
import { createOrganizationInput } from './dto/organizationFacility.type';

@Injectable()
export class OrganizationFacilityService {
  constructor(
    @InjectRepository(Facility)
    private OrganizationfacilityRepository: Repository<OrganizationFacility>,
  ) {}
  async greet(): Promise<string> {
    return 'Hello this the service class for the patient service';
  }

  async findFacility(findFacility: string): Promise<OrganizationFacility> {
    const existingData = await this.OrganizationfacilityRepository.findOne({
      where: { facilityId: findFacility },
    });
    return existingData;
  }

  async createOrgFacility(input: createOrganizationInput): Promise<OrganizationFacility> {
    console.log(input);
    const createdFacility = await this.OrganizationfacilityRepository.save({
      orgFacilityId: uuidv4(),
      orgId: input.orgId,
      facilityId: input.facilityId,
    });

    return createdFacility;
  }
}
