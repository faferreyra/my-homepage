import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'APPLICATION'
})
export class Application {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  url: string;
  @Column()
  icon: string;
  @Column({
    default: 0
  })
  position: number;
}
