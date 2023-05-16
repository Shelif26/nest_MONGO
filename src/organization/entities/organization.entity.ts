import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ObjectIdColumn,
  } from 'typeorm';
  
  @Entity('organization')
  export class Organization {
    @ObjectIdColumn()
    id: number;
  
    @Column('varchar', { name: 'organization Id', length: 100 })
    orgId!: string

    @Column('varchar', { name: 'name', length: 100, unique: true, primary: true })
    name!: string;
  
    @Column('varchar', { name: 'organization Type', length: 100 })
    orgType!: string;
  
    @Column('varchar', { name: 'npi', length: 100 })
    npi!: string;

    @CreateDateColumn({ name: 'created_timestamp', nullable: false })
    createdTimestamp?: Date;
  
    @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
    updatedTimestamp?: Date;
  
    @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
    deletedTimestamp?: Date;
  }
  