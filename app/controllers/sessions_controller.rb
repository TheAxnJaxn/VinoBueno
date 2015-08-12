class SessionsController < ApplicationController

  def new
    render :signin
  end

  def create

    # Inserted into params based on button clicked
    action = params[:type]
    if action == 'sign-in'

      user = User.find_by_credentials(
                    params[:user][:username],
                    params[:user][:password])

      if user
        login!(user)
        redirect_to root_url
      else
        flash.now[:errors] = ["Invalid username or password"]
        render :signin
      end

    elsif action == 'sign-up'

      @user = User.new(user_params)

      if @user.save
        login!(@user)
        redirect_to root_url
      else
        flash.now[:errors] = @user.errors.full_messages
        redirect_to root_url
      end

    end

  end

  def destroy
    logout!
    render :signin
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
