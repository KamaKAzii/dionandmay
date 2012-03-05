class CreateInvitations < ActiveRecord::Migration
  def change
    create_table :invitations do |t|
      t.string :surname
      t.string :first_name
      t.string :invitation_id
      t.string :username
      t.string :invite_text
      t.integer :members
      t.boolean :ceremony
      t.boolean :reception

      t.timestamps
    end
  end
end
