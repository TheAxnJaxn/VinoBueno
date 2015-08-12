# == Schema Information
#
# Table name: wines
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  maker       :string           not null
#  type        :string           not null
#  varietal    :string           not null
#  description :text             not null
#  grown       :string
#  vintage     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Wine < ActiveRecord::Base
end
