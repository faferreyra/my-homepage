import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

@Entity({
  name: 'BOOKMARK',
})
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  url: string;
  @Column()
  icon: string;
  @Column({
    default: 0,
  })
  position: number;
  @ManyToOne(() => Category, (category) => category.bookmarks)
  category: Category;
}
