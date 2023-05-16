import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('patient')
export class Patient {
  @ObjectIdColumn()
  id: number;

  @Column('varchar', { name: 'patientId', length: 100 })
  patientId!: string;

  @Column('varchar', { name: 'first_name', length: 100 })
  firstName!: string;

  @Column('varchar', { name: 'last_name', length: 100 })
  lastName!: string;

  @Column('varchar', { name: 'date Of birth', length: 100 })
  dateOfBirth!: string;

  @Column('varchar', { name: 'addresses', length: 100 })
  addresses?: string;

  @Column('varchar', { name: 'phones', length: 100 })
  phones?: string;

  @CreateDateColumn({ name: 'created_timestamp', nullable: false })
  createdTimestamp?: Date;

  @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
  updatedTimestamp?: Date;

  @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
  deletedTimestamp?: Date;
}
