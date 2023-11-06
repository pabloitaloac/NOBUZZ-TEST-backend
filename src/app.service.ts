import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './connection/modules/task.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllData(): Promise<Task[]> {
    // Use the repository to fetch all data from the "Task" table
    return this.taskRepository.find();
  }

  async newData(newTaskData: Partial<Task>): Promise<Task> {
    // Create and save a new task in the "Task" table
    const newTask = this.taskRepository.create(newTaskData);
    return this.taskRepository.save(newTask);
  }
}
