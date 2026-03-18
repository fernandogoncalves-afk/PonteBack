import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteAdvogadoController } from './cliente_advogado.controller';
import { ClienteAdvogadoService } from './cliente_advogado.service';
import { ClienteAdvogado } from './cliente_advogado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteAdvogado])],
  controllers: [ClienteAdvogadoController],
  providers: [ClienteAdvogadoService],
})
export class ClienteAdvogadoModule {}
