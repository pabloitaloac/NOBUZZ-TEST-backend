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
    return 'HI, EVERYONE!<br>please, use the following routes to access the API features:<br><li>/all-data => get all data</li><li>/new-task => create new task</li>';
  }

  async getAllData(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async newData(newTaskData: { title: string, description: string }): Promise<Task> {
    const { title, description } = newTaskData;

    const newTask = this.taskRepository.create({
      title: title,
      description: description,
      createdAt: new Date(),
      completedAt: null,
    });
    return this.taskRepository.save(newTask);
    }
}
