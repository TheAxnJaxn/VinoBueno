class Api::CellarsController < ApplicationController

  before_action :require_logged_in!

  def index
    @cellars = Cellar.where(user_id: current_user.id)
    render json: @cellars
  end

  def show
    @cellar = Cellar.find(params[:id]).includes(:wines)
    render json: @cellar
  end

  def create
    @cellar = Cellar.new(cellar_params)
    @cellar.user_id = current_user.id

    if @cellar.save
      render json: @cellar
    else
      render json: @cellar.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def cellar_params
    params.require(:cellar).permit(:name)
  end

end
