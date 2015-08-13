json.array! @wines do |wine|
  json.partial! 'api/wines/wine', wine: wine
end
