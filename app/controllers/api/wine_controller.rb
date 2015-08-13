class Api::WineController < ApplicationController
  def show
    @wine = Wine.find(params[:id])
  end
end
