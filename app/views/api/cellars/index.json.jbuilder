json.array! @cellars do |cellar|
  json.extract! cellar, :id, :name, :created_at, :updated_at
  json.wine_ids cellar.cellarings.map { |cellaring| cellaring.wine_id }
  json.cellarings cellar.cellarings
end
