
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PlanoModule } from './planos/planos.module';
import { AdvogadosModule } from './advogados/advogados.module';
import { ClienteAdvogadoModule } from './cliente_advogado/cliente_advogado.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // seu usuário
      password: 'senha123', // sua senha
      database: 'ponte_juridica', // nome do banco
      autoLoadEntities: true,
      synchronize: true, // apenas em desenvolvimento
    }),
    UsersModule,
    PlanoModule,
    AdvogadosModule,
    ClienteAdvogadoModule,
  ],
})
export class AppModule {}
