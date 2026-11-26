import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrismaService } from '../prisma.service';

@Controller()
export class ReservasiController {
  constructor(private readonly prisma: PrismaService) {}

  @MessagePattern('ulasan.findByDestinasi')
  findUlasanByDestinasi(@Payload() destinasiId: number) {
    return this.prisma.ulasan.findMany({
      where: { destinasiId: Number(destinasiId) },
      orderBy: { createdAt: 'desc' },
    });
  }
}