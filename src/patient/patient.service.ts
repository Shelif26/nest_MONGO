/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Patient } from './entities/patient.enity';
import { createPatientInput } from './dto/patient.type';

@Injectable()
export class patientService {
  constructor(
    @InjectRepository(Patient)
    private patientRepository: MongoRepository<Patient>,
  ) {}
  async greet(): Promise<string> {
    return 'Hello this the service class for the patient service';
  }

  async createPatient(input: createPatientInput) {
    console.log(input);
    const createdPatient = new Patient();
    createdPatient.patientId = uuidv4();
    createdPatient.firstName = input.firstName;
    createdPatient.lastName = input.lastName;
    createdPatient.dateOfBirth = input.dateOfBirth;
    createdPatient.addresses = input.addresses;
    createdPatient.phones = input.phones;

    const savedPatient = await this.patientRepository.save(createdPatient);
    return savedPatient;
  }
}
