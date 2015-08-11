# Schema Information


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique


## wines
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
maker       | string    | not null
type        | string    | not null (red/white)
varietal    | string    | not null
description | text      | not null
name        | string    |
grown       | string    |
image       | binary    |
vintage     | integer   |


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
