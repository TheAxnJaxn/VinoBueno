# == Schema Information
#
# Table name: cellarings
#
#  id         :integer          not null, primary key
#  cellar_id  :integer          not null
#  wine_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cellaring < ActiveRecord::Base

  belongs_to :cellar
  belongs_to :wine

end
