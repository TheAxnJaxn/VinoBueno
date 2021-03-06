class CreateWines < ActiveRecord::Migration
  def change
    create_table :wines do |t|
      t.string :name, null: false
      t.float :avg_rating, null: false
      t.string :maker, null: false
      t.string :wine_type, null: false
      t.string :varietal, null: false
      t.text :description, null: false
      t.string :grown
      t.integer :vintage

      t.timestamps null: false
    end
  end
end
