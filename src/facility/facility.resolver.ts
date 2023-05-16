/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FacilityService } from './facility.service';
import { Facility } from './entities/facility.entity';
import { createFacility } from './dto/facility.type';

@Resolver('Facility')
export class FacilityResolver {
  constructor(private readonly FacilityService: FacilityService) {}

  @Query()
  findFacility(@Args('findFacility') findFacility: string): Promise<Facility> {
    return this.FacilityService.findFacility(findFacility);
  }

  @Mutation()
  createFacility(@Args('input') input: createFacility): Promise<Facility> {
    return this.FacilityService.createFacility(input);
  }
}
