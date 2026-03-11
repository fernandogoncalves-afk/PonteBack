import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  ManyToOne, 
  JoinColumn 
} from 'typeorm';
import { Cliente } from '../users/user.entity';
import { Advogado } from '../advogados/advogados.entity';

@Entity('cliente_advogado')
export class ClienteAdvogado {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_cliente: number;

  @Column()
  id_advogado: number;



  @Column({ type: 'boolean', default: false })
  soft_delete: boolean;

  // Relacionamento com Cliente
  @ManyToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  // Relacionamento com Advogado (tabela 'adv')
  @ManyToOne(() => Advogado)
  @JoinColumn({ name: 'id_advogado' })
  advogado: Advogado;
}