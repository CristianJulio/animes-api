import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("animes")
export class Anime {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string;

  @Column()
  episodes: number;

  @Column()
  status: string

  @Column()
  score: number

  @Column({ nullable: true })
  picture: string

  @Column()
  released_date: string

  @Column()
  type: string

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[]
}