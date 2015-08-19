# == Schema Information
#
# Table name: wines
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  avg_rating  :float            not null
#  maker       :string           not null
#  wine_type   :string           not null
#  varietal    :string           not null
#  description :text             not null
#  grown       :string
#  vintage     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Wine < ActiveRecord::Base

  validates :name, :maker, :wine_type, :varietal, :description, presence: true
  before_validation :ensure_avg_rating

  has_one :image, as: :imageable

  has_many :reviews

  has_many :cellarings
  has_many :cellars, through: :cellarings

  def ensure_avg_rating
    self.avg_rating = reviews.average(:rating).to_f
  end

  # only called when a review is first created
  def update_wine
  # updates wine's average rating
    self.avg_rating = reviews.average(:rating).to_f
    self.save
  # adds wine to current user's "Tasted" cellar
    # Cellaring.create(
    #   wine_id: self.id,
    #   cellar_id: current_user.cellars.where(name: "Tasted")
    # )
  end

end
