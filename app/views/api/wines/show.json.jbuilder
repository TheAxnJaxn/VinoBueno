json.extract! @wine, :id, :name, :maker, :wine_type, :varietal, :description

json.images @wine.images do |image|
  json.img_url image.url
  json.img_url_thumb image.url_thumb
  json.img_id image.id
end
