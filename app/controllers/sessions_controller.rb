class SessionsController < ApplicationController

  def new
    render :signinup
  end

  def create
    user = User.find_by_credentials(
                    params[:user][:username],
                    params[:user][:password])

      if user
        login!(user)
        redirect_to root_url
      else
        flash.now[:errors] = ["Invalid username or password"]
        render :signinup
      end
  end

  def destroy
    logout!
    render :signinup
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
