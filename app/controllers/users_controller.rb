class UsersController < ApplicationController

  def new
    @user = User.new
    render :signup
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :signup
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end
