# == Schema Information
#
# Table name: images
#
#  id             :integer          not null, primary key
#  url            :string           not null
#  url_thumb      :string           not null
#  imageable_id   :integer          not null
#  imageable_type :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Image < ActiveRecord::Base

  belongs_to :imageable, polymorphic: true
  
end
