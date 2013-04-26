class ChangeRejectionCausesTable < ActiveRecord::Migration
  def up
    change_table :rejection_causes do |t|
      t.rename :cause_short_description, :description
    end
  end

  def down
  end
end
