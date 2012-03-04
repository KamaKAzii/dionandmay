class WelcomeController < ApplicationController

  def index
  end

  def yourface
    respond_to do |format|
      format.json {
        render :json => {:message => "this is xhr request", :success => "success"}
      }
    end
  end

end
