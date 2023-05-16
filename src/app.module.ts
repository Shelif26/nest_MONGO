import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/db/database.module';
import { PatientModule } from './patient/patient.module';
import { OrganizationModule } from './organization/organization.module';
import { GraphqlModule } from './config/graphql/graphql.module';
import { FacilityModule } from './facility/facility.module';

@Module({
  imports: [
    DatabaseModule,
    GraphqlModule,
    PatientModule,
    OrganizationModule,
    FacilityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
