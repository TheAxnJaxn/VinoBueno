json.extract! @cellar, :id, :name, :created_at, :updated_at

json.wines @cellar.wines do |wine|
  json.extract! wine, :id, :name, :maker, :wine_type, :varietal, :description, :grown, :vintage#, :avg_rating

  json.img_url wine.image.url
  json.img_url_thumb wine.image.url_thumb
  json.img_id wine.image.id

  json.avg_rev (wine.avg_rating*100).round / 100.0
end
