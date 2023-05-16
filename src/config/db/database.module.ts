import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Facility } from 'src/facility/entities/facility.entity';
import { OrganizationFacility } from 'src/facility/entities/orgFacility.entity';
import { Organization } from 'src/organization/entities/organization.entity';
import { Patient } from 'src/patient/entities/patient.enity';
import { Provider } from 'src/provider/entities/provider.entity';
import { Staff } from 'src/staff/entities/staff.enity';

dotenv.config();
console.log('from database module');

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
        Facility,
        Organization,
        Patient,
        Provider,
        Staff,
        OrganizationFacility,
      ],
    }),
  ],
})
export class DatabaseModule {}
