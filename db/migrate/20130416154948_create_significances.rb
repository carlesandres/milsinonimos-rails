class CreateSignificances < ActiveRecord::Migration
  def change
    create_table :significances do |t|
      t.integer :word_id
      t.integer :meaning_id

      t.timestamps
    end
  end
end
