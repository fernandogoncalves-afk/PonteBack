import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
//import { AdvogadosService } from '../advogados/advogados.service';
import { ClienteAdvogado } from '../cliente_advogado/cliente_advogado.entity';
import { ClienteAdvogadoService } from './cliente_advogado.service';

@Controller('clienteadvogado')
export class ClienteAdvogadoController {
  constructor(
    private readonly ClienteAdvogadoService: ClienteAdvogadoService,
  ) {}

  @Get()
  findAll() {
    return this.ClienteAdvogadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ClienteAdvogadoService.findOne(id);
  }

  @Post()
  create(@Body() ClienteAdvogado: ClienteAdvogado) {
    return this.ClienteAdvogadoService.create(ClienteAdvogado);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: ClienteAdvogado) {
    return this.ClienteAdvogadoService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ClienteAdvogadoService.remove(id);
  }
}
