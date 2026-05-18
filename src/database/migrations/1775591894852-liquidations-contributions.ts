import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class LiquidationsContributions1775591894852 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                schema: 'contributions',
                name: 'liquidation_contributions',
                columns: [
                    {
                        name: 'id',
                        type: 'bigint',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'liquidation_id',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'contribution_id',
                        type: 'bigint',
                        isNullable: false,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                        onUpdate: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                        isNullable: true,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['liquidation_id'],
                        referencedSchema: 'contributions',
                        referencedTableName: 'liquidations',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                    {
                        columnNames: ['contribution_id'],
                        referencedSchema: 'contributions',
                        referencedTableName: 'contributions',
                        referencedColumnNames: ['id'],
                        onDelete: 'CASCADE',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contributions.liquidation_contributions', true);
    }

}