import { PlanosService } from './planos.service';
import { Plano } from './planos.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
