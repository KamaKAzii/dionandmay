class SessionsController < Devise::SessionsController

  def create
    resource = warden.authenticate!(:scope => resource_name, :recall => "#{controller_path}#failure")
    sign_in(resource_name, resource)
    return render :json => {:success => true, :yourface => "hello"}
  end

  def failure
    return render :json => {:success => false, :errors => ["Login failed."]}
  end

  def destroy
    signed_out = sign_out(resource_name)
    return render :json => {:destroy => true, :yourface => "hello"}
  end

end
