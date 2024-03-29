Invitation.delete_all
User.delete_all

incrementemail = "@something.com"
increment = 1

open("_documents/invitations.csv") do |invitations|
  invitations.read.each_line do |invitation|
    surname, first_name, invitation_id, username, invite_text, members, ceremony, reception = invitation.chomp.split("|")

    email = increment.to_s + incrementemail
    increment = increment + 1

    current_user = User.find_or_create_by_username(:username => username, :password => invitation_id, :email => email)
    current_invitation = Invitation.create!(:surname => surname, :first_name => first_name, :invitation_id => invitation_id, :username => username, :invite_text => invite_text, :members => members, :ceremony => ceremony, :reception => reception)
    current_invitation.user = current_user
    current_invitation.save
  end
end
