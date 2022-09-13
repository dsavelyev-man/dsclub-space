import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("username").notNullable()
      table.string("avatar_path").notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
