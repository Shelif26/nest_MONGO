/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { patientService } from './patient.service';
import { createPatientInput } from './dto/patient.type';

@Resolver('OrganizationUser')
export class PatientResolver {
  constructor(private readonly patientservice: patientService) {}
  @Query()
  greet(): Promise<string> {
    return this.patientservice.greet();
  }

  @Mutation()
  createPatient(@Args('input') input: createPatientInput){
    return this.patientservice.createPatient(input)
  }
}
