/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrganizationpatientService } from './organizationPatient.service';
import { createOrganizationInput } from './dto/organizationPatient.type';

@Resolver('OrganizationPatient')
export class OrganizationPatientResolver {
  constructor(
    private readonly OrganizationpatientService: OrganizationpatientService,
  ) {}
  @Query()
  greetfromOrgPatient(): Promise<string> {
    return this.OrganizationpatientService.greetfromOrgPatient();
  }

  @Query()
  getPatientOrgAssociation(@Args('orgPatientId') orgPatientId: string) {
    console.log(orgPatientId);
    return this.OrganizationpatientService.getPatientOrgAssociation(
      orgPatientId,
    );
  }

  @Mutation()
  createOrgPatient(@Args('input') input: createOrganizationInput) {
    return this.OrganizationpatientService.createOrgPatient(input);
  }
}
