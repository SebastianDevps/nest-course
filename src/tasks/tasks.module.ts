import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TaskController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
    controllers: [TaskController],
    providers: [TasksService]
})
export class TaskModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes({
            path: '/tasks',
            method: RequestMethod.GET
        }
    ).apply(AuthMiddleware).forRoutes('tasks')
    }

}
