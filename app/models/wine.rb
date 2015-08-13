# == Schema Information
#
# Table name: wines
#
#  id          :integer          not null, primary key
#  name        :string           not null
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

  has_one :image, as: :imageable

end