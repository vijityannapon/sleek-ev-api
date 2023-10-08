import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sections')
export class Section {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'is_sidebar' })
  isSidebar: boolean;

  @Column()
  ordinal: number;
}
