class Api::ImagesController < ApplicationController

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
    params.require(:image).permit(:url, :url_thumb)
  end

end
