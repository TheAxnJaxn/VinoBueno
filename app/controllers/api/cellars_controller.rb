class Api::CellarsController < ApplicationController

  before_action :require_logged_in!

  def index
    @cellars = Cellar.where(user_id: current_user.id)
    render :index
  end

  def show
    @cellar = Cellar.find(params[:id]).includes(:wines)
  end
end
