class CHangeUserCOmments < ActiveRecord::Migration
  def up
    change_table :user_comments do |t|
      t.rename :timestamp, :created_at
      t.change :created_at, :datetime
      t.column :updated_at, :datetime
      t.remove :email
    end
  end

  def down
  end
end
