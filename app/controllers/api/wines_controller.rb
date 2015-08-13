class Api::WinesController < ApplicationController

  def index
    @wines = Wine.all.sample(3)
    render :index
  end

  def show
    @wine = Wine.includes(:image).find(params[:id])
    render json: @wine
  end

  def create
    @wine = Wine.new(wine_params)

    if @wine.save
      render json: @wine
    else
      render json: @wine.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @wine = Wine.find(params[:id])
    @wine.try(:destroy)
    render json: {}
  end

  private

  def wine_params
    params.require(:wine).permit(:name, :maker, :wine_type, :varietal, :description, :grown, :vintage)
  end
end

# make this a module?
# module Api
#   class WineController < ApiController
#   end
# end
