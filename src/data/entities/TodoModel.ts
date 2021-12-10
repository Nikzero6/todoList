import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tasks")
export class TodoModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  task: string;

  @Column()
  task_description: string;
}
