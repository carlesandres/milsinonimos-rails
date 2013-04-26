class ChangeMeaningsTable < ActiveRecord::Migration
  def change
    change_table :meanings do |t|
      t.remove :distinction, :subject_id, :hidden, :check_count, :super_id, :morphologic_id, :morphologic_1_id, :morphologic_2_id
      t.rename :when_added, :created_at
      t.column :updated_at, :datetime
      t.change :created_at, :datetime
    end
  end
end
