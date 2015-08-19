# == Schema Information
#
# Table name: cellars
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cellar < ActiveRecord::Base

  validates :name, :user_id, presence: true

  belongs_to :user
  
  has_many :cellarings
  has_many :wines, through: :cellarings

end
