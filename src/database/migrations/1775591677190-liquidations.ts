import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Liquidations1775591677190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        schema: 'contributions',
        name: 'liquidations',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'contribution_procedure_id',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'number',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'total',
            type: 'numeric',
            precision: 10,
            scale: 2,
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
            columnNames: ['contribution_procedure_id'],
            referencedSchema: 'contributions',
            referencedTableName: 'contribution_procedures',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contributions.liquidations', true);
  }
}
