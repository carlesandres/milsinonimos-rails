class RemoveUseIdFromSignifications < ActiveRecord::Migration
  def up
    change_table :significations do |t|
      t.remove :use_id
    end
  end

  def down
  end
end
