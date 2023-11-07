import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './connection/modules/task.entity'; 
import { JwtModule } from '@nestjs/jwt';

const secretKey = '';


@Module({
  imports: [
    
    JwtModule.register({
      secret: secretKey,
      signOptions: { expiresIn: '1h' },
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nobuzztest',
      password: 'nobuzztest',
      database: 'nobuzztest', 
      entities: [Task], 
      synchronize: true, 
    }),
    
    TypeOrmModule.forFeature([Task])],
    
    controllers: [AppController],

    providers: [AppService],

})
export class AppModule {}  
