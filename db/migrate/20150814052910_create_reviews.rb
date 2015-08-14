class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :wine_id, null: false
      t.integer :rating, null: false
      t.text :review

      t.timestamps null: false
    end

    add_index :reviews, :user_id
    add_index :reviews, :wine_id
  end
end
