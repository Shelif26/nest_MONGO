import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Facility } from './entities/facility.entity';
import { FacilityResolver } from './facility.resolver';
import { FacilityService } from './facility.service';
import { OrganizationFacility } from './entities/orgFacility.entity';
import { OrganizationFacilityService } from './organizationFacility.service';
import { OrgFacilityResolver } from './organozationFacility.resolver';
import { Organization } from 'src/organization/entities/organization.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Facility, OrganizationFacility, Organization]),
    OrganizationFacility,
  ],
  providers: [
    FacilityResolver,
    FacilityService,
    OrganizationFacilityService,
    OrgFacilityResolver,
  ],
})
export class FacilityModule {}
