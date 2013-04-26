class ChangeWordsTableAgain < ActiveRecord::Migration
  def up
    change_column :words, :changed_at, :datetime
  end

  def down
  end
end
