class Api::CellarsController < ApplicationController

  before_action :require_logged_in!

  def index
    @cellars = Cellar.where(user_id: current_user.id)
                      .includes(:cellarings)
    render :index
  end

  def show
    @cellar = Cellar.where(id: params[:id])
                    .includes(:wines)
                    .includes(:images)
                    .includes(:cellarings)[0]
    render :show
  end

  def create
    @cellar = Cellar.new(cellar_params)
    @cellar.user_id = current_user.id

    if @cellar.save
      render json: @cellar
    else
      render json: @cellar.errors.full_messages,
       status: :unprocessable_entity
    end
  end

  def destroy
    @cellar = Cellar.find(params[:id])
    @cellar.try(:destroy)
    render json: {}
  end

  def update
    @cellar = Cellar.find(params[:id])
    if @cellar.update(cellar_params)
      render json: @cellar
    else
      render json: @cellar.errors.full_messages,
       status: :unprocessable_entity
    end
  end

  private

  def cellar_params
    params.require(:cellar).permit(:name)
  end

end
