# VinoBueno

[Live link][vino]

[vino]: http://vinobueno.io/

## Minimum Viable Product
Vino Bueno is a clone of Goodreads for wine reviews, built on Rails and Backbone. Users can:

<!-- Markdown checklist. Used to keep track of my progress. -->

- [X] Create accounts, sign up/in/out
- [X] Navbar on all pages - different when logged in/out
- [X] Home page shows 5 randomly-selected wines
- [X] View wine detail pages
- [X] Add new wine
- [X] Wine detail page shows reviews
- [X] Create reviews with ratings
- [X] Add to shelves/cellars ('want to taste', 'tasted')
- [X] Create custom shelves/cellars
- [X] Search for wines
- [ ] Friend other users
- [ ] View a feed of friend's wine reviews

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md


## Implementation Timeline


### Phase 1: User Accounts and Authentication (~1 day)

I will implement user authentication in Rails based on the practices learned at
App Academy. The most important part of this phase will be pushing the app to
Heroku and ensuring that everything works before moving on to phase 2.


### Phase 2: View Wine Pages (~2 days)

I will add API routes to fetch and query wine data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to view wine show pages. During this time, I will
locate third-party wine data to seed the wines table in the database.


### Phase 3: Editing and Displaying Wines and Reviews (~2 days)

I will add API routes to fetch and query review data as JSON, then add
Backbone models and collections that fetch data from those routes. By the end
of this phase, users will be able to add reviews from wine show pages and
also be able to add new wines.

### Phase 4: Cellars and Searching for Wines (~2 days)

I'll add the ability to create cellars, add wines to a cellar, with two default
cellars: 'want to taste' and 'tasted.' When a user reviews a wine, it's
automatically added to the 'tasted' cellar. I'll need to add 'search' routes
to the Wines controller, with a results view page.

### Phase 5: Friendships and User Feed (~1-2 days)

I'll start by adding the ability to view user's show pages and add them
as a friend. I'll add a `feed` route that uses the `current_user`'s
`friendships` associations to serve a list of friend's wine reviews, ordered
chronologically. On the Backbone side, I'll make a `FeedShow` view whose
collection fetches from the new route.  Ultimately, this will be the page users
see after logging in.

### Bonus Features (TBD)
- [ ] User avatars & usernames
- [ ] Comment on reviews
- [X] Ability to add images
- [ ] Rating detail graphs for wine show pages
- [ ] Typeahead search bar
- [ ] Recommendations on wines to try
- [ ] Information on where to buy the wine
- [ ] Like reviews
- [ ] Editable user profile
- [ ] Get Cloudinary to work on https of VinoBueno
