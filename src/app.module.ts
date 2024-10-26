import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/tasks.module';
import { PruebaController } from './prueba/prueba.controller';
import { PruebaService } from './prueba/prueba.service';
import { PaymentsModule } from './payments/payments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TaskModule, PaymentsModule, UsersModule],
  controllers: [PruebaController],
  providers: [PruebaService]
})
export class AppModule {}
