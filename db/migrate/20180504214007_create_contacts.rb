class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.string :type
      t.string :address
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
