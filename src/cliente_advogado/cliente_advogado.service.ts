import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClienteAdvogado } from '../cliente_advogado/cliente_advogado.entity';

@Injectable()
export class ClienteAdvogadoService {
  constructor(
    @InjectRepository(ClienteAdvogado)
    private ClienteAdvogadoRepo: Repository<ClienteAdvogado>,
  ) {}

  findAll() {
    return this.ClienteAdvogadoRepo.find();
  }

  findOne(id: number) {
    return this.ClienteAdvogadoRepo.findOneBy({ id });
  }

  create(ClienteAdvogado: ClienteAdvogado) {
    return this.ClienteAdvogadoRepo.save(ClienteAdvogado);
  }

  update(id: number, user: ClienteAdvogado) {
    return this.ClienteAdvogadoRepo.update(id, user);
  }

  remove(id: number) {
    return this.ClienteAdvogadoRepo.delete(id);
  }
}
