import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReservasiModule } from './reservasi/reservasi.module';

@Module({
  imports: [ReservasiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
