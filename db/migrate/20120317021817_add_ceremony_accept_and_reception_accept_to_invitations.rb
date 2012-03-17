class AddCeremonyAcceptAndReceptionAcceptToInvitations < ActiveRecord::Migration
  def change
    add_column :invitations, :ceremony_accept, :integer, :default => 0
    add_column :invitations, :reception_accept, :integer, :default => 0
  end
end
