json.array! @wines do |wine|
  json.partial! 'api/wines/wine', wine: wine

  json.cellarings wine.cellarings do |cellaring|
    json.extract! cellaring, :id, :cellar_id, :wine_id
  end

end
