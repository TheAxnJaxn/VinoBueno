# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique


## wines
- type: restrict to red/white/rose
- grown: location (Sonoma, Napa, etc.)
- vintage: year
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
maker       | string    | not null
type        | string    | not null
varietal    | string    | not null
description | text      | not null
grown       | string    |
vintage     | integer   |


## images
- Polymorphic association so images can be for wines or users
- User images is a bonus phase, but want DB set up for that now
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
url             | string    | not null
url_thumb       | string    | not null
imageable_id    | integer   | not null
imageable_type  | string    | not null


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
wine_id     | integer   | not null, foreign key (references wines)
rating      | integer   | not null
review      | text      |


## cellars
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
title       | string    | not null


## cellar-ings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
cellar_id   | integer   |
wine_id     | integer   |


## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users)
friend_id   | integer   | not null, foreign key (references users)
