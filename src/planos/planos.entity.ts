import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('plano') // Mapeia para a tabela 'plano' do seu SQL
export class Plano {
  @PrimaryGeneratedColumn() // Corresponde ao INT AUTO_INCREMENT PRIMARY KEY
  id: number;

  @Column({ type: 'varchar', length: 50 }) // VARCHAR(50)
  nome: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 }) // DECIMAL(10,2)
  valor_mensal: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 }) // DECIMAL(10,2)
  valor_anual: number;

  @Column({ type: 'boolean', default: false }) // BOOLEAN DEFAULT FALSE
  soft_delete: boolean;
}