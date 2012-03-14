class WelcomeController < ApplicationController

  def index
  end

  def contact
    respond_to do |format|
      format.json { render "welcome/contact", :content_type => "text/javascript" }
    end
  end

end
