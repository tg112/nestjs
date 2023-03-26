import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // make new table named class name
export class Report {
  @PrimaryGeneratedColumn() // generate PK automatically
  id: number;

  @Column() // make a column
  price: number;
}
