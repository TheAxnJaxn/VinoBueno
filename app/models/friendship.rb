# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ActiveRecord::Base

  validates :user_id, :friend_id, presence: true
  validates_uniqueness_of :user_id, :scope => :friend_id, :message => "You're already friends :)"

  belongs_to :user, foreign_key: :user_id
  belongs_to :friend, foreign_key: :friend_id, class_name: 'User', primary_key: :id

end
