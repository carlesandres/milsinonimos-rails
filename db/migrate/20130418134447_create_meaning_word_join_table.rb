class CreateMeaningWordJoinTable < ActiveRecord::Migration
  def change
    create_table :meanings_words, :id => false do |t|
      t.integer :meaning_id
      t.integer :word_id
    end
  end
end
