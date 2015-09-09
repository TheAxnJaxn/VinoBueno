# This file contains record creation to seed the database.

##### Users #####
user1 = User.create(email: 'guest@example.com', password: 'password')
user2 = User.create(email: 'tyrion@lannister.rock', password: 'paysdebts')
user3 = User.create(email: 'cersei@lannister.rock', password: 'winelover')
user4 = User.create(email: 'williamshakespeare@yeoldentimes.com', password: 'something')
user5 = User.create(email: 'bettywhite@gmail.com', password: 'bigglassplease')

##### Wines #####
wine1 = Wine.create(name: "Cupcake Vineyards Merlot",
            maker: "Cupcake Vineyards",
            wine_type: "Red",
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
wine6 = Wine.create(name: "Sweet Bliss Pink",
            maker: "Sweet Bliss Winery",
            wine_type: "Rose",
            varietal: "Blend",
            description: "Flash a little attitude... You've never had a wine like Sweet Bliss Pink before. White Zins are sooo 2005. We know you're craving a wine with more zip and character. The complexity of Sweet Bliss Pink will exquisitely reveal itself to you with every bright and beautiful sip. The label artwork of Sweet Bliss Pink depicts the essence and flavors of the wine impeccably. A fresh strawberry dipped in rich, white chocolate begs you to savor the delights of this sweet and clean, yet lush pink wine. The aromas of fresh strawberries jump out of the glass, while flavors of fresh melon and honey are artfully balanced by bright acidity. Sweet Bliss Pink is beautifully versatile. It's superb when paired with barbecued chicken or pork loin in a citrus glaze. For the ultimate indulgence, pair Sweet Bliss with berry pie or strawberry shortcake. And of course, pour Sweet Bliss on its own as a glorious aperitif.",
            grown: "Washington")
wine7 = Wine.create(name: "Sweet Bliss Red",
            maker: "Sweet Bliss Winery",
            wine_type: "Red",
            varietal: "Blend",
            description: "Slip into something lush... Sweet Bliss Red is a perfect wine for people who appreciate the complexity and rich texture of a superb red wine, but prefer an approachable, fruit-forward, off-dry flavor profile. The label artwork of Sweet Bliss Red depicts the essence and flavors of the wine flawlessly. A ripe red cherry dipped in sumptuous, melted chocolate irresistibly inspires you to delight in this sweet, luscious red wine. The aromas are a divine harmony of ripe red fruit and subtle toasted oak with deep cherry flavors and a velvety chocolate mouth feel. Sweet Bliss Red is strikingly versatile - so no need to be too precious with food pairings. Have a ball and experiment pairing this lush wine with your tastiest favorites. Serve it up with barbecued chicken, grilled burgers or pizza... For the ultimate indulgence, pair Sweet Bliss Red with chocolate cake, cheesecake and cobblers. Of course, we tempt you to pour Sweet Bliss all on its own as a divine aperitif.",
            grown: "Washington")

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
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1439830669/fmomw6zkp9zruoyr66e6.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/fmomw6zkp9zruoyr66e6.jpg",
            imageable_id: wine6.id,
            imageable_type: "Wine")
Image.create(url: "http://res.cloudinary.com/dpvk3lafz/image/upload/v1440515597/sweet-bliss-red_sbleoc.jpg",
            url_thumb: "http://res.cloudinary.com/dpvk3lafz/image/upload/w_150,h_150/sweet-bliss-red_sbleoc.jpg",
            imageable_id: wine7.id,
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
              wine_id: wine6.id,
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
Review.create(user_id: user4.id,
              wine_id: wine1.id,
              rating: 4,
              review: "Give me a bowl of wine. I have not that alacrity of spirit Nor cheer of mind that I was wont to have.")
Review.create(user_id: user4.id,
              wine_id: wine3.id,
              rating: 4,
              review: "Good wine is a good familiar creature, if it be well used.")
Review.create(user_id: user4.id,
              wine_id: wine5.id,
              rating: 3,
              review: "A man cannot make him laugh – but that’s no marvel; he drinks no wine.")
Review.create(user_id: user4.id,
              wine_id: wine7.id,
              rating: 2,
              review: "I pray you, do not fall in love with me, For I am falser than vows made in wine.")
Review.create(user_id: user4.id,
              wine_id: wine2.id,
              rating: 1,
              review: "O thou invisible spirit of wine! If thou hast no name to be known by, let us call thee devil!")


##### Cellarings ##### (All users will have 2 cellars by default)
Cellaring.create(cellar_id: 1, wine_id: wine1.id)
Cellaring.create(cellar_id: 1, wine_id: wine2.id)
Cellaring.create(cellar_id: 1, wine_id: wine5.id)
Cellaring.create(cellar_id: 1, wine_id: wine6.id)
Cellaring.create(cellar_id: 1, wine_id: wine7.id)
Cellaring.create(cellar_id: 2, wine_id: wine3.id)
Cellaring.create(cellar_id: 2, wine_id: wine4.id)

##### Friendships #####
Friendship.create(user_id: user1.id, friend_id: user2.id)
Friendship.create(user_id: user1.id, friend_id: user3.id)
Friendship.create(user_id: user1.id, friend_id: user4.id)
