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

require 'test_helper'

class WineTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
