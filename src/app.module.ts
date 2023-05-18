import { Module } from '@nestjs/common';
import { PatientModule } from './patient/patient.module';
import { OrganizationModule } from './organization/organization.module';
import { FacilityModule } from './facility/facility.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { Patient } from './patient/entities/patient.enity';
import { Organization } from './organization/entities/organization.entity';
import { OrganizationFacility } from './facility/entities/orgFacility.entity';
import { Staff } from './staff/entities/staff.enity';
import { Facility } from './facility/entities/facility.entity';
import { Provider } from './provider/entities/provider.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'RPM_practise',
      synchronize: true,
      logging: true,
      entities: [
        Patient,
        Organization,
        OrganizationFacility,
        Staff,
        Facility,
        Provider,
      ],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    PatientModule,
    OrganizationModule,
    FacilityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
