import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './connection/modules/task.entity'; 



@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres', // The type of your database
        host: 'localhost',
        port: 5432,
        username: 'nobuzztest',
        password: 'nobuzztest',
        database: 'tarefas',
        entities: [Task], // Add your entity classes here
        synchronize: true, // Only for development; set to false in production
      }),
    
    TypeOrmModule.forFeature([Task])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}  
