import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ObjectIdColumn,
  } from 'typeorm';
  
  @Entity('Organizationpatient')
  export class OrganizationPatient {
    @ObjectIdColumn()
    id: number;
  
    @Column('varchar', { name: 'organization_patientId', length: 100 })
    orgPatientId!: string;
  
    @Column('varchar', { name: 'patientId', length: 100 })
    patientId!: string;
  
    @Column('varchar', { name: 'orgId', length: 100 })
    orgId!: string;
  
    @Column('varchar', { name: 'active', length: 100 })
    active?: boolean;
  
    @CreateDateColumn({ name: 'created_timestamp', nullable: false })
    createdTimestamp?: Date;
  
    @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
    updatedTimestamp?: Date;
  
    @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
    deletedTimestamp?: Date;
  }
  