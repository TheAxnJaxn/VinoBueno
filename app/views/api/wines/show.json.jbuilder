json.partial! 'api/wines/wine', wine: @wine

json.reviews @wine.reviews


# json.reviews @wine.reviews do |review|
#   json.extract! review, :id, :review, :rating, :wine_id, :user_id, :created_at, :updated_at
#   json.user review.user, :id, :email
# end
