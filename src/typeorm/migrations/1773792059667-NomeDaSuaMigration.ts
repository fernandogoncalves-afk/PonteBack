import { MigrationInterface, QueryRunner } from "typeorm";

export class NomeDaSuaMigration1773792059667 implements MigrationInterface {
    name = 'NomeDaSuaMigration1773792059667'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`adv\` DROP FOREIGN KEY \`adv_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` DROP FOREIGN KEY \`cliente_advogado_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` DROP FOREIGN KEY \`cliente_advogado_ibfk_2\``);
        await queryRunner.query(`DROP INDEX \`plano_id\` ON \`adv\``);
        await queryRunner.query(`DROP INDEX \`id_advogado\` ON \`cliente_advogado\``);
        await queryRunner.query(`DROP INDEX \`id_cliente\` ON \`cliente_advogado\``);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` DROP COLUMN \`data_vinculo\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` CHANGE \`nome\` \`nome\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`email\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` CHANGE \`documento\` \`documento\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`data_cadastro\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`data_cadastro\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`cliente\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`nome\` \`nome\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`valor_mensal\` \`valor_mensal\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`valor_anual\` \`valor_anual\` decimal(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`nome\` \`nome\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`email\` \`email\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`especializacao\` \`especializacao\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`oab\` \`oab\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` DROP COLUMN \`data_cadastro\``);
        await queryRunner.query(`ALTER TABLE \`adv\` ADD \`data_cadastro\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`assinatura\` \`assinatura\` enum ('ativo', 'pendente', 'cancelado') NOT NULL DEFAULT 'ativo'`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` CHANGE \`id_cliente\` \`id_cliente\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` CHANGE \`id_advogado\` \`id_advogado\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`adv\` ADD CONSTRAINT \`FK_bf702936870c98c61ff2e333ac2\` FOREIGN KEY (\`plano_id\`) REFERENCES \`plano\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` ADD CONSTRAINT \`FK_6c2dacaded92c5f8328d5a0be87\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` ADD CONSTRAINT \`FK_18614101cb098660161e9a3c722\` FOREIGN KEY (\`id_advogado\`) REFERENCES \`adv\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` DROP FOREIGN KEY \`FK_18614101cb098660161e9a3c722\``);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` DROP FOREIGN KEY \`FK_6c2dacaded92c5f8328d5a0be87\``);
        await queryRunner.query(`ALTER TABLE \`adv\` DROP FOREIGN KEY \`FK_bf702936870c98c61ff2e333ac2\``);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` CHANGE \`id_advogado\` \`id_advogado\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` CHANGE \`id_cliente\` \`id_cliente\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`assinatura\` \`assinatura\` enum ('ativo', 'pendente', 'cancelado') NULL DEFAULT 'ativo'`);
        await queryRunner.query(`ALTER TABLE \`adv\` DROP COLUMN \`data_cadastro\``);
        await queryRunner.query(`ALTER TABLE \`adv\` ADD \`data_cadastro\` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`oab\` \`oab\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`especializacao\` \`especializacao\` varchar(100) NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`adv\` CHANGE \`nome\` \`nome\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`valor_anual\` \`valor_anual\` decimal(10,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`valor_mensal\` \`valor_mensal\` decimal(10,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`plano\` CHANGE \`nome\` \`nome\` varchar(50) NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` CHANGE \`soft_delete\` \`soft_delete\` tinyint NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`data_cadastro\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`data_cadastro\` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`cliente\` CHANGE \`documento\` \`documento\` varchar(20) NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`cliente\` ADD \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente\` CHANGE \`nome\` \`nome\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` ADD \`data_vinculo\` timestamp NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`CREATE INDEX \`id_cliente\` ON \`cliente_advogado\` (\`id_cliente\`)`);
        await queryRunner.query(`CREATE INDEX \`id_advogado\` ON \`cliente_advogado\` (\`id_advogado\`)`);
        await queryRunner.query(`CREATE INDEX \`plano_id\` ON \`adv\` (\`plano_id\`)`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` ADD CONSTRAINT \`cliente_advogado_ibfk_2\` FOREIGN KEY (\`id_advogado\`) REFERENCES \`adv\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`cliente_advogado\` ADD CONSTRAINT \`cliente_advogado_ibfk_1\` FOREIGN KEY (\`id_cliente\`) REFERENCES \`cliente\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`adv\` ADD CONSTRAINT \`adv_ibfk_1\` FOREIGN KEY (\`plano_id\`) REFERENCES \`plano\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
