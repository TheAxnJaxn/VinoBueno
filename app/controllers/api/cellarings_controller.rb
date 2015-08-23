class Api::CellaringsController < ApplicationController

  before_action :require_logged_in!

  def create
    @cellaring = Cellaring.new(cellaring_params)

    if @cellaring.save
      render json: @cellaring
    else
      render json: @cellaring.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @cellaring = Cellaring.find(params[:id])
    @cellaring.try(:destroy)
  end

  private

  def cellaring_params
    params.require(:cellaring).permit(:cellar_id, :wine_id)
  end

end
