import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PlanosService } from './planos.service';
import { Plano } from './planos.entity';

@Controller('planos')
export class PlanosController {
  constructor(private readonly planoService: PlanosService) {}

  @Get()
  findAll() {
    return this.planoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.planoService.findOne(id);
  }

  @Post()
  create(@Body() plano: Plano) {
    return this.planoService.create(plano);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: Plano) {
    return this.planoService.update(id, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.planoService.remove(id);
  }
}
