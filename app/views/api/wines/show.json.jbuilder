json.partial! 'api/wines/wine', wine: @wine

json.reviews @wine.reviews do |review|
  json.extract! review, :id, :review, :rating, :wine_id, :user_id, :created_at, :updated_at
  json.user review.user, :id, :email
  # currently left out, because each review would have the same wine data sent with it otherwise
  # json.wine review.wine, :id, :name, :maker, :wine_type, :varietal, :description, :grown, :vintage
end
