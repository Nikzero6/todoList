import { Connection, Repository } from "typeorm";
import { TodoModel } from "../entities/TodoModel";

interface CreateTodoData {
  task: string;
  task_description: string;
}

export class TodosRepository {
  private ormRepository: Repository<TodoModel>;

  constructor(connection: Connection) {
    this.ormRepository = connection.getRepository(TodoModel);
  }

  public async getAll(): Promise<TodoModel[]> {
    const todos = await this.ormRepository.find();

    return todos;
  }

  public async create({
    task,
    task_description,
  }: CreateTodoData): Promise<TodoModel> {
    const todo = this.ormRepository.create({
      task,
      task_description,
    });

    await this.ormRepository.save(todo);

    return todo;
  }

  public async delete(id: number): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
