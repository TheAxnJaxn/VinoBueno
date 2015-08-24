
json.extract! wine, :id, :name, :maker, :wine_type, :varietal, :description, :grown, :vintage#, :avg_rating

json.img_url wine.image.url
json.img_url_thumb wine.image.url_thumb
json.img_id wine.image.id

json.avg_rev (wine.avg_rating*100).round / 100.0

json.reviews @wine.reviews do |review|
  json.extract! review, :id, :review, :rating, :wine_id, :user_id, :created_at, :updated_at
  json.user_email review.user.email
end

json.cellarings @wine.cellarings do |cellaring|
  if current_user.cellars.id.include?(cellaring.cellar_id)
    json.extract! cellaring, :id, :cellar_id, :wine_id
  end
end
