class ChangeSearchHistory < ActiveRecord::Migration
  def up
    rename_table :search_history, :searches
    change_table :searches do |t|
      t.rename :timeofsearch, :created_at
      t.column :updated_at, :datetime
      t.change :created_at, :datetime
    end
  end

  def down
  end
end
