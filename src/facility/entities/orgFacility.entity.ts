import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('organizationFacility')
export class OrganizationFacility {
  @ObjectIdColumn()
  id: number;

  @Column('varchar', { name: 'orgFacility Id', length: 100 })
  orgFacilityId!: string;

  @Column('varchar', {
    name: 'org Id',
    length: 100,
  })
  orgId!: string;

  @Column('varchar', {
    name: 'facility Id',
    length: 100,
  })
  facilityId!: string;

  @Column('varchar', {
    name: 'isActive',
    length: 100,
  })
  active!: boolean;

  @CreateDateColumn({ name: 'created_timestamp', nullable: false })
  createdTimestamp?: Date;

  @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
  updatedTimestamp?: Date;

  @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
  deletedTimestamp?: Date;
}
