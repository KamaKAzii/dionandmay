class WelcomeController < ApplicationController

  def index
  end

  def contact
    respond_to do |format|
      format.json { render "welcome/_contact.json" }
    end
  end

end
