import { Module } from '@nestjs/common';
import { ReservasiController } from './reservasi.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ReservasiController],
  providers: [PrismaService],
})
export class ReservasiModule {}