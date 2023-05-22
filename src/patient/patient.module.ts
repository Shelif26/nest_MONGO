import { Module } from '@nestjs/common';
import { patientService } from './patient.service';
import { PatientResolver } from './patient.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.enity';
import { OrganizationPatient } from './entities/orgPatient.entity';
import { OrganizationPatientResolver } from './organizationPatient.resolver';
import { OrganizationpatientService } from './organizationPatient.service';
import { Organization } from 'src/organization/entities/organization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient, OrganizationPatient, Organization]),
    OrganizationPatient,
  ],
  providers: [
    PatientResolver,
    patientService,
    OrganizationPatientResolver,
    OrganizationpatientService,
  ],
})
export class PatientModule {}
