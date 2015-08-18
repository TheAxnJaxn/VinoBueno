class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :require_signed_in!, :require_logged_in!

  private

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session!
  end

  def logout!
    current_user.try(:reset_token!)
    session[:session_token] = nil
  end

  # for Rails side
  def require_signed_in!
    redirect_to new_session_url unless logged_in?
  end

  # for Backbone side
  def require_logged_in!
    unless logged_in?
      render json: ["You must be signed in to perform that action!"], status: :unauthorized
    end
  end

end
