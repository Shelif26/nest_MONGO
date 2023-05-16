import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ObjectIdColumn,
  } from 'typeorm';
  
  @Entity('staff')
  export class Staff {
    @ObjectIdColumn()
    id: number;
  
    @Column('varchar', { name: 'staff UUID', length: 100 })
    staffId!: string

    @Column('varchar', { name: 'staffType', length: 100, unique: true, primary: true })
    staffType!: string;
  
    @Column('varchar', { name: 'organization Type', length: 100 })
    orgType!: string;
  
    @Column('varchar', { name: 'designation', length: 100 })
    designation!: string;

    @Column('varchar', { name: 'active', length: 100 })
    active: string;

    @CreateDateColumn({ name: 'created_timestamp', nullable: false })
    createdTimestamp?: Date;
  
    @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
    updatedTimestamp?: Date;
  
    @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
    deletedTimestamp?: Date;
  }
  