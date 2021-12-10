import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class ChangeSchema1639122670615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "task",
            type: "text",
          },
          {
            name: "task_description",
            type: "task",
          },
        ],
      })
    );

    // let hasTable = await queryRunner.hasTable("TodoModel");
    // let hasColumn = await queryRunner.hasColumn("Todomodel", "status");

    // if (hasTable && !hasColumn) {
    //   await queryRunner.addColumn(
    //     "TodoModel",
    //     new TableColumn({
    //       name: "Status",
    //       type: "string",
    //       default: "to_sart",
    //     })
    //   );
    // }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
