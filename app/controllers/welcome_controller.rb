class WelcomeController < ApplicationController

  before_filter :authenticate_user!

  def index
  end

  def main
    @invitations = Invitation.where("username = ?", current_user.username)
  end

  def update_invite
    @invitation = Invitation.find(params[:id])
    @invitation.update_attributes(params[:invitation])
    redirect_to "/welcome/main"
  end

end
