json.extract! @cellar, :id, :name, :created_at, :updated_at

json.wines @cellar.wines do |wine|
  json.partial! 'api/wines/wine', wine: wine
end
