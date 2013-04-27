class CreateSignifications < ActiveRecord::Migration
  def change
    create_table :significations do |t|

      t.timestamps
    end
  end
end
