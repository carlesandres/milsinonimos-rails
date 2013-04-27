class ChangeSigniTableName < ActiveRecord::Migration
  def up
    rename_table :word_meanings, :significations
    change_table :significations do |t|
      t.rename :when_added, :created_at
      t.change :created_at, :datetime
      t.column :updated_at, :datetime
    end
  end

  def down
  end
end
