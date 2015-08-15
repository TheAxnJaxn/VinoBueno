class SessionsController < ApplicationController

  def new
    render :signin
  end

  def create

    if params["type"] == "guest"
      user = User.find_by_email("guest@example.com")
    else
      user = User.find_by_credentials(
                      params[:user][:email],
                      params[:user][:password])
    end

    if user
      login!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :signin
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

end
