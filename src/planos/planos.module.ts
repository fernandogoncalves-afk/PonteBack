import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanosController } from './planos.controller';
import { PlanosService } from './planos.service';
import { Plano } from './planos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plano])],
  controllers: [PlanosController],
  providers: [PlanosService],
})
export class PlanoModule {}
