import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvogadosController } from './advogados.controller';
import { AdvogadosService } from './advogados.service';
import { Advogado } from './advogados.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Advogado])],
  controllers: [AdvogadosController],
  providers: [AdvogadosService],
})
export class AdvogadosModule {}
