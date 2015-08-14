class Api::WinesController < ApplicationController

  def index
    @wines = Wine.all.includes(:image).sample(3)
    # uses views/api/wines/index.json.jbuilder
    render :index
  end

  def show
    @wine = Wine.find(params[:id])
    # uses views/api/wines/show.json.jbuilde
    render :show
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
