class CreateSuggestions < ActiveRecord::Migration
  def change
    create_table :suggestions do |t|
      t.string :word
      t.integer :status
      t.integer :autocorrected_word_id

      t.timestamps
    end
  end
end
