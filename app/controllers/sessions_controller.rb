class SessionsController < Devise::SessionsController

  def create
    resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
    sign_in(resource_name, resource)
    return render :json => {:success => true, :yourface => "hello"}
  end

  def failure
    return render :json => {:success => false, :errors => ["Login failed."]}
  end

end
