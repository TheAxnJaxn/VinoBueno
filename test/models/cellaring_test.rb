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

require 'test_helper'

class CellaringTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
