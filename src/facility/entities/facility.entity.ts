import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('facility')
export class Facility {
  @ObjectIdColumn()
  id: number;

  @Column('varchar', { name: 'facility Id', length: 100 })
  facilityId!: string;

  @Column('varchar', { name: 'name', length: 100, unique: true, primary: true })
  name!: string;

  @Column({ type: 'json' })
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: number;
    country: string;
  };

  @CreateDateColumn({ name: 'created_timestamp', nullable: false })
  createdTimestamp?: Date;

  @UpdateDateColumn({ name: 'updated_timestamp', nullable: false })
  updatedTimestamp?: Date;

  @DeleteDateColumn({ name: 'deleted_timestamp', nullable: false })
  deletedTimestamp?: Date;
}
