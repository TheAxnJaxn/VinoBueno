class Api::ReviewsController < ApplicationController

  before_action :require_logged_in!

  def destroy
    @review = Review.find(params[:id])
    @review.try(:destroy)
    render json: @review
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

  def index
    @reviews = Review.all.where(user_id: current_user.id)
    render json: @reviews
  end

  def update
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  private

  def review_params
    params.require(:review).permit(:wine_id, :rating, :review)
  end

end
