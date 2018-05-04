class RemoveTypeFromContacts < ActiveRecord::Migration[5.1]
  def up
    remove_column :contacts, :type
  end

  def down
    add_column :contacts, :type
  end
end
