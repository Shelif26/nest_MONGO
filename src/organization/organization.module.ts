import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { OrganizationService } from './organization.service';
import { OrganizationResolver } from './organization.resolver';
import { OrganizationPatient } from 'src/patient/entities/orgPatient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organization, OrganizationPatient])],
  providers: [OrganizationResolver, OrganizationService],
})
export class OrganizationModule {}
