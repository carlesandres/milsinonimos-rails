class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :word_id
      t.string :description
      t.integer :status

      t.timestamps
    end
  end
end
