json.extract! wine, :id, :name, :maker, :wine_type, :varietal, :description, :grown, :vintage

json.image do
  json.img_url @wine.image.url
  json.img_url_thumb @wine.image.url_thumb
  json.img_id @wine.image.id
end

# json.reviews wine.reviews do |review|
#   json.extract! review, :id, :review, :rating, :wine_id, :user_id, :created_at, :updated_at
#   json.user review.user, :id, :email
#   json.wine review.wine, :id, ...
# end

# if current_user.wines.include?(wine)
#   current_user.cellars.each do |cellar|
#     if cellar.wines.include?(wine)
#       json.in_cellar cellar, :id, :name, :user_id
#     end
#   end
# end

# json.current_user current_user, :id, :email
#
# json.cellars current_user.cellars do |cellar|
#   json.extract! cellar, :id, :name, :user_id
# end
