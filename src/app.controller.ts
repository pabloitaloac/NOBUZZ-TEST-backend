import { Controller, Get, Post, Body  } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './connection/modules/task.entity'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('all-data')
  async getAllData(): Promise<Task[]> {
    const tasks = await this.appService.getAllData();
    return tasks;
  }


  @Post('new-task')
  async newData(@Body() newTaskData: { title: string; description: string }): Promise<Task> {
    return this.appService.newData(newTaskData);
  }
  




}












