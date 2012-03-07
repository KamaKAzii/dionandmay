Invitation.delete_all
open("_documents/invitations.csv") do |invitations|
  invitations.read.each_line do |invitation|
    surname, first_name, invitation_id, username, invite_text, members, ceremony, reception= invitation.chomp.split(",")
    Invitation.create!(:surname => surname, :first_name => first_name, :invitation_id => invitation_id, :username => username, :invite_text => invite_text, :members => members, :ceremony => ceremony, :reception => reception)
  end
end
