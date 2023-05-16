import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Facility } from './entities/facility.entity';
import { createFacility } from './dto/facility.type';

@Injectable()
export class FacilityService {
  constructor(
    @InjectRepository(Facility)
    private facilityRepository: Repository<Facility>,
  ) {}
  async greet(): Promise<string> {
    return 'Hello this the service class for the patient service';
  }

  async findFacility(findFacility: string): Promise<Facility> {
    const existingData = await this.facilityRepository.findOne({
      where: { facilityId: findFacility },
    });
    return existingData;
  }

  async createFacility(input: createFacility): Promise<Facility> {
    console.log(input)
    const createdFacility = await this.facilityRepository.save({
      facilityId: uuidv4(),
      name: input.name,
      address: {
        line1: input.address.line1,
        line2: input.address.line2,
        city: input.address.city,
        state: input.address.state,
        country: input.address.country,
        zip: input.address.zip,
      },
    });

    return createdFacility;
  }

  async createOrgFacility(){
    
  }
}
