import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Bookmark } from './bookmark.entity';

@Entity({
  name: 'CATEGORY',
})
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({
    default: 0,
  })
  position: number;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.category)
  bookmarks: Bookmark[];
}
