import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrganizationFacility } from './entities/orgFacility.entity';
import { OrganizationFacilityService } from './organizationFacility.service';
import { createOrganizationInput } from './dto/organizationFacility.type';

@Resolver('Facility')
export class OrgFacilityResolver {
  constructor(
    private readonly organizationFacilityservice: OrganizationFacilityService,
  ) {}

  @Mutation()
  createOrgFacility(
    @Args('input') input: createOrganizationInput,
  ): Promise<OrganizationFacility> {
    return this.organizationFacilityservice.createOrgFacility(input);
  }
}
