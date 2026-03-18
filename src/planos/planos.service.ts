import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plano } from './planos.entity';

@Injectable()
export class PlanosService {
  constructor(
    @InjectRepository(Plano)
    private planosRepo: Repository<Plano>,
  ) {}

  findAll() {
    return this.planosRepo.find();
  }

  findOne(id: number) {
    return this.planosRepo.findOneBy({ id });
  }

  create(user: Plano) {
    return this.planosRepo.save(user);
  }

  update(id: number, user: Plano) {
    return this.planosRepo.update(id, user);
  }

  remove(id: number) {
    return this.planosRepo.delete(id);
  }
}
