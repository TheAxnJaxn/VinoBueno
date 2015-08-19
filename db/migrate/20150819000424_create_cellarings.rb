class CreateCellarings < ActiveRecord::Migration
  def change
    create_table :cellarings do |t|
      t.integer :cellar_id, null: false
      t.integer :wine_id, null: false

      t.timestamps null: false
    end

    add_index :cellarings, :cellar_id
    add_index :cellarings, :wine_id
  end
end
