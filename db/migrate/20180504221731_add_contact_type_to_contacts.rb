class AddContactTypeToContacts < ActiveRecord::Migration[5.1]
  def up 
    add_column :contacts, :contactType, :string
  end

  def down 
    remove_column :contacts, :contactType, :string
  end
end
