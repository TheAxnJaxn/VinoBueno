# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(email: 'guest@example.com', password: 'password')

Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439422377/cupcake-merlot_qxyfui.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_100,h_100/cupcake-merlot_qxyfui.jpg",
            imageable_id: 1,
            imageable_type: "Wine")

Wine.create(name: "Cupcake Vineyards Merlot",
            maker: "Cupcake Vineyards",
            wine_type: "red",
            varietal: "Merlot",
            description: "Sourced from vineyards on California’s Central Coast, our Merlot is big and bold. Full-bodied yet smooth, the wine shows flavors of red cherries that evolve into decadent levels of cocoa, spice and espresso as well as a smooth finish. Moderated by the Pacific Ocean, the unique topography and climate of the sun-drenched Central Coast produces world-class wines. Our Merlot grapes are cool fermented for a slow process that retains aroma and complexity. A regimen of pump-overs extracts soft tannins and color, and grape skins are pressed before reaching dryness to preserve a lush tannin structure. Aging in American oak barrels adds more richness and complexity.",
            grown: "Central Coast, California")
