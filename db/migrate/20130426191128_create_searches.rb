class CreateSearches < ActiveRecord::Migration
  def change
    create_table :searches do |t|
      t.integer :word_id

      t.timestamps
    end
  end
end
