import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrganizationService } from './organization.service';
import { createOrgInput } from './dto/org.type';
import { Organization } from './entities/organization.entity';

@Resolver('OrganizationUser')
export class OrganizationResolver {
  constructor(private readonly organizationservice: OrganizationService) {}
  @Query()
  greet(): Promise<string> {
    return this.organizationservice.greet();
  }

  @Query()
  findOrg(@Args('uuid') uuid: string): Promise<Organization> {
    return this.organizationservice.findOrg(uuid);
  }

  @Query()
  getAllPatientOrganization(@Args('orgId') orgId: string) {
    return this.organizationservice.getAllPatientOrganization(orgId);
  }

  @Mutation()
  createOrg(@Args('input') input: createOrgInput): Promise<Organization> {
    return this.organizationservice.createOrg(input);
  }
}
