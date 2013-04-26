class ChangeTableWordEvenMore < ActiveRecord::Migration
  def change
    change_table :words do |t|
      t.rename :was_added, :changed_at
      t.column :updated_at, :datetime
    end
  end
end
