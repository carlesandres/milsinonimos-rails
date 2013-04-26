class DropSeveralLegacyDatabases < ActiveRecord::Migration
  def change
    drop_table :antonyms
    drop_table :db_sequence
    drop_table :removed_words
    drop_table :subjects
    drop_table :wiktionary
    drop_table :word_forms
    drop_table :word_mapping
  end
end
