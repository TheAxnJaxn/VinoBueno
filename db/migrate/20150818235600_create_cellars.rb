class CreateCellars < ActiveRecord::Migration
  def change
    create_table :cellars do |t|
      t.string :name, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :cellars, :user_id
  end
end
