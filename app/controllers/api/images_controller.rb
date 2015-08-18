class Api::ImagesController < ApplicationController

  before_action :require_logged_in!

  def create
    @image = Image.new(img_params)

    if @image.save
      render json: @image
    else
      render json: @image.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def img_params
    params.require(:image).permit(:url, :url_thumb, :imageable_id, :imageable_type)
  end

end
