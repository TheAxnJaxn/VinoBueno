class Api::WinesController < ApplicationController

  def index
    rand_ids = [1, 1, 1]
    # rand(Wine.count) + 1
    @wines = Wine.find([rand_ids])
    fail
  end

  def show
    @wine = Wine.find(params[:id])
    # @image = @wine.images.first
    render json: @wine
  end

  private

  def wine_params
    params.require(:wine).permit(:name, :maker, :wine_type, :varietal, :description, :grown, :vintage)
  end
end

# module Api
#   class WineController < ApiController
#
#     def show
#       @wine = Wine.find(params[:id])
#       render json: @wine
#     end
#
#     private
#
#     def wine_params
#       params.require(:wine).permit(:name, :maker, :wine_type, :varietal, :description, :grown, :vintage)
#     end
#   end
# end
