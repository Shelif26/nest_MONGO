import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ObjectIdColumn,
  } from 'typeorm';
  
  @Entity('provider')
  export class Provider {
    @ObjectIdColumn()
    id: number;
  
    @Column('varchar', { name: 'provider Id', length: 100 })
    providerId!: string

    @Column('varchar', { name: 'provider Type', length: 100, unique: true, primary: true })
    providerType!: string;
  
    @Column('varchar', { name: 'designation', length: 100 })
    designation!: string;
  
    @Column('varchar', { name: 'npi', length: 100 })
    npi!: string;

    @Column('varchar', { name: 'dea', length: 100 })
    dea!: string;

    @CreateDateColumn({ name: 'created_timestamp', nullable: false })
    createdTimestamp?: Date;
  
    @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
    updatedTimestamp?: Date;
  
    @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
    deletedTimestamp?: Date;
  }
  