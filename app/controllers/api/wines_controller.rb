class Api::WinesController < ApplicationController

  before_action :require_logged_in!

  def index
    @wines = Wine.all
                .includes(:image)
                .includes(:cellarings)
                .sample(5)
    render :index
  end
    # .where(cellarings: { cellar_id: current_user.cellars })

  def show
    @wine = Wine.where(id: params[:id])
                .includes(:cellarings)
                .includes(:reviews)
                .includes(:users)[0]
    render :show
  end
    # .where(cellarings: { cellar_id: current_user.cellars })

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
    render json: @wine
  end

  def search
    term = "%" + params[:search] + "%"
    @wines = Wine.where(
          "LOWER(name) LIKE ? OR LOWER(maker) LIKE ? OR LOWER(varietal) LIKE ?",
          term.downcase,
          term.downcase,
          term.downcase)
          .includes(:image)
          .includes(:cellarings)
    render :index
  end

  private

  def wine_params
    params.require(:wine).permit(:name, :maker, :wine_type, :varietal, :description, :grown, :vintage)
  end

end

# refactor later
# module Api
#   class WineController < ApiController
#   end
# end
