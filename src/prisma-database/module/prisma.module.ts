import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../service/prisma.service';

@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaDatabaseModule {}
