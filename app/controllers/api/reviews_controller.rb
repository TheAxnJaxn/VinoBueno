class Api::ReviewsController < ApplicationController

  # before_action :require_logged_in!

  def destroy
    @review = Review.find(params[:id])
    @review.try(:destroy)
    render json: {}
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
  end

  private

  def review_params
    params.require(:review).permit(:wine_id, :rating, :review)
  end

end
