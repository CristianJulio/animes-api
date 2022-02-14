import { Exclude } from "class-transformer";
import { Anime } from "src/animes/entities/anime.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  first_name: string;

  @Column({ nullable: true })
  second_name: string;

  @Column()
  first_lastname: string;

  @Column()
  second_lastname: string;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  picture: string;

  @ManyToMany(() => Anime)
  @JoinTable()
  animes: Anime[]
}