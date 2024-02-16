import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("movies")
export class Movie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: null })
  title: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
