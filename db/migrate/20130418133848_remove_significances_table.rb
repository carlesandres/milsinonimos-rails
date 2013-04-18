class RemoveSignificancesTable < ActiveRecord::Migration
  def up
      drop_table :significances
  end

  def down
    create_table :significances do |t|
      t.integer :word_id
      t.integer :meaning_id

      t.timestamps
    end
  end
end
