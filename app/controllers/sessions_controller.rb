class SessionsController < ApplicationController

  def new
    render :signin
  end

  def create
    user = User.find_by_credentials(
                    params[:user][:email],
                    params[:user][:password])

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
