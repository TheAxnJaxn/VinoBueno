json.extract! wine, :id, :name, :maker, :wine_type, :varietal, :description, :grown, :vintage#, :avg_rating

json.img_url wine.image.url
json.img_url_thumb wine.image.url_thumb
json.img_id wine.image.id

json.avg_rev wine.avg_rating




# Future phase - Cellars
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
