# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  wine_id    :integer          not null
#  rating     :integer          not null
#  review     :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base

  validates :user_id, :wine_id, :rating, presence: true

  belongs_to :wine, class_name: "Wine"
  belongs_to :user, class_name: "User"

  after_save :update_wine_avg_rating

  def update_wine_avg_rating
    wine.update_avg_rating
  end

end
