json.array! @wines do |wine|

  json.extract! wine, :id, :name, :maker, :wine_type, :varietal, :description, :grown, :vintage#, :avg_rating

  json.img_url wine.image.url
  json.img_url_thumb wine.image.url_thumb
  json.img_id wine.image.id

  json.avg_rev (wine.avg_rating*100).round / 100.0

  json.cellarings wine.cellarings do |cellaring|
    json.extract! cellaring, :id, :cellar_id, :wine_id
  end

end
