# This file contains record creation to seed the database.

##### Users #####
user1 = User.create(email: 'guest@example.com', password: 'password')
user2 = User.create(email: 'tyrion@lannister.rock', password: 'paysdebts')
user3 = User.create(email: 'cersei@lannister.rock', password: 'winelover')

##### Wines #####
wine1 = Wine.create(name: "Cupcake Vineyards Merlot",
            maker: "Cupcake Vineyards",
            wine_type: "red",
            varietal: "Merlot",
            description: "Sourced from vineyards on California’s Central Coast, our Merlot is big and bold. Full-bodied yet smooth, the wine shows flavors of red cherries that evolve into decadent levels of cocoa, spice and espresso as well as a smooth finish. Moderated by the Pacific Ocean, the unique topography and climate of the sun-drenched Central Coast produces world-class wines. Our Merlot grapes are cool fermented for a slow process that retains aroma and complexity. A regimen of pump-overs extracts soft tannins and color, and grape skins are pressed before reaching dryness to preserve a lush tannin structure. Aging in American oak barrels adds more richness and complexity.",
            grown: "Central Coast, California")
wine2 = Wine.create(name: "Orange Label",
            maker: "Lazarus Wine",
            wine_type: "Red",
            varietal: "Blend",
            description: "A truly unique project, Lazarus Wine trains people in 'sensorial winemaking,' a way for those without sight to finely tune their noses and palates to be able to detect the subtle developments in a wine throughout the entire winemaking process. Given the degree of sensitivity that someone without sight can achieve with their senses of smell and taste, it is no surprise that this wine is quite delicious. Rich red fruited aromas show some plum as well as hints of red apple skins. The palate is fruit forward and juicy, loaded with red berries and enough acidity to keep the wine fresh. Merlot and Syrah from the area around Huesca, Aragon are blended to create this delicious red.",
            grown: "Ribera del Gallego-Cinco Villas",
            vintage: 2007)
wine3 = Wine.create(name: "The Big Bad Red Blend",
            maker: "Once Upon A Vine",
            wine_type: "Red",
            varietal: "Blend",
            description: "This wine is from United States, California region. A blend of several red varietals, The Big Bad Red blend appeases our inner dark side, satisfying that craving for the bold and daring. The wine leads with a bramble of berries, dark black plum and root beer flavors, framed by toasted spices. Fleshy and ripe, the palate delivers layers of black fruit with a savory and spicy character. Supple tannins hold flavors into a long, lasting finish. A perfect pairing for a dark and stormy night.",
            grown: "California")
wine4 = Wine.create(name: "The Fairest Chardonnay",
            maker: "Once Upon A Vine",
            wine_type: "White",
            varietal: "Chardonnay",
            description: "Who's the fairest of them all? The Fairest Chardonnay offers a ripe nose of pear, guava, pineapple and creme brulee. These enchanting flavors linger well into the finish, leaving notes of citrus and spice. Relax with a glass of our classically elegant Chardonnay, lightly touched with oak to give it a creamy, indulgent texture. Let its lush flavors of honeysuckle, vanilla, and crème brûlée transport you to a magical vineyard far, far away.",
            grown: "California")
wine5 = Wine.create(name: "Enchanted Woods Bubbly",
            maker: "Once Upon A Vine",
            wine_type: "White",
            varietal: "Blend",
            description: "Enchanting evenings start with enchanting wines. Our Enchanted Woods Bubbly is a delightfully effervescent white wine that makes a perfect accompaniment to any celebration, large or small. This light and fruity wine has flavors of juicy red apples, ripe pear, and lush pineapple, finished with a long creamy texture. This special limited release wine is produced only once a year.",
            grown: "California")

##### Images #####
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439422377/cupcake-merlot_qxyfui.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/cupcake-merlot_qxyfui.jpg",
            imageable_id: wine1.id,
            imageable_type: "Wine")
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439490479/lazarus-white_qssdyq.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/lazarus-white_qssdyq.jpg",
            imageable_id: wine2.id,
            imageable_type: "Wine")
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439490479/onceuponavine-red-blend-label_m9hq1v.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/onceuponavine-red-blend-label_m9hq1v.jpg",
            imageable_id: wine3.id,
            imageable_type: "Wine")
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439490479/onceuponavine-fairest-chardonnay_reoiwz.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/onceuponavine-fairest-chardonnay_reoiwz.jpg",
            imageable_id: wine4.id,
            imageable_type: "Wine")
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439490479/onceuponavine-enchanted-woods-bubbly_jmjiz7.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/onceuponavine-enchanted-woods-bubbly_jmjiz7.jpg",
            imageable_id: wine5.id,
            imageable_type: "Wine")

##### Reviews #####
Review.create(user_id: user1.id,
              wine_id: wine1.id,
              rating: 3,
              review: "You can really taste the cherries. Definitely added this one to my cellar! Wine improves with age. The older I get, the better I like it.")
Review.create(user_id: user3.id,
              wine_id: wine1.id,
              rating: 5,
              review: "An unhappy wife is a wine merchant's best friend.")
Review.create(user_id: user1.id,
              wine_id: wine2.id,
              rating: 3,
              review: "The braille label is really cool! I cook with wine, sometimes I even add it to the food. Either give me more wine or leave me alone.")
Review.create(user_id: user2.id,
              wine_id: wine2.id,
              rating: 2,
              review: "It's not easy being drunk all the time. If it were easy, everyone would do it.")
Review.create(user_id: user1.id,
              wine_id: wine3.id,
              rating: 2,
              review: "I love the idea of 'Once Upon a Vine' (always been a Disney person), and the name and label of this bottle got my attention. But I didn't like it as much as I'd hoped. What wine goes with Captain Crunch?")
Review.create(user_id: user3.id,
              wine_id: wine3.id,
              rating: 5,
              review: "As good as any wine from The Reach.")
Review.create(user_id: user3.id,
              wine_id: wine4.id,
              rating: 5,
              review: "Age is just a number. It’s totally irrelevant unless, of course, you happen to be a bottle of wine.")
Review.create(user_id: user1.id,
              wine_id: wine5.id,
              rating: 3,
              review: "My only regret in life is that I didn’t drink enough Champagne. Accept what life offers you and try to drink from every cup. All wines should be tasted; some should only be sipped, but with others, drink the whole bottle.")
Review.create(user_id: user3.id,
              wine_id: wine5.id,
              rating: 5,
              review: "More wine!")
