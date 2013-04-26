class ChangeSuggested < ActiveRecord::Migration
  def up
    rename_table :suggested, :suggestions
    change_table :suggestions do |t|
      t.rename :when_suggested, :created_at
      t.change :created_at, :datetime
      t.column :updated_at, :datetime
    end
  end

  def down
  end
end
