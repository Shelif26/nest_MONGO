import { Module } from '@nestjs/common';
import { patientService } from './patient.service';
import { PatientResolver } from './patient.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './entities/patient.enity';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  providers: [PatientResolver, patientService],
})
export class PatientModule {}
