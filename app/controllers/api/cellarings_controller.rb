class Api::CellaringsController < ApplicationController

  before_action :require_logged_in!

  def create
    @cellaring = Cellaring.new(cellaring_params)

    if @cellaring.save
      render json: @cellaring
    else
      render json: @cellaring.errors.full_messages,
              status: :unprocessable_entity
    end
  end

  def destroy
    @cellaring = Cellaring.find_by(
                  cellar_id: params[:cellar_id],
                  wine_id: params[:wine_id]
                  )
    @cellaring.try(:destroy)
  end

  def update
    @cellaring = Cellaring.find(params[:id])
    if @cellaring.update_attributes(cellaring_params)
      render json: @cellaring
    else
      render json: @cellaring.errors.full_messages,
             status: :unprocessable_entity
    end
  end

  private

  def cellaring_params
    params.require(:cellaring).permit(:cellar_id, :wine_id)
  end

end
