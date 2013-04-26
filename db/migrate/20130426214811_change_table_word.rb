class ChangeTableWord < ActiveRecord::Migration
  def change
    change_table :words do |t|
      t.rename :word, :entry
      t.remove :lookup
    end
  end
end
