# json.extract! @wine, :id, :name, :maker, :wine_type, :varietal, :description
#

json.partial! 'api/wines/wine', wine: @wine
