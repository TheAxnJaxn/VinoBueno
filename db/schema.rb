# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150819000424) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cellarings", force: :cascade do |t|
    t.integer  "cellar_id",  null: false
    t.integer  "wine_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "cellarings", ["cellar_id"], name: "index_cellarings_on_cellar_id", using: :btree
  add_index "cellarings", ["wine_id"], name: "index_cellarings_on_wine_id", using: :btree

  create_table "cellars", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "cellars", ["user_id"], name: "index_cellars_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "url",            null: false
    t.string   "url_thumb",      null: false
    t.integer  "imageable_id",   null: false
    t.string   "imageable_type", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "images", ["imageable_id"], name: "index_images_on_imageable_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "wine_id",    null: false
    t.integer  "rating",     null: false
    t.text     "review"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree
  add_index "reviews", ["wine_id"], name: "index_reviews_on_wine_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

  create_table "wines", force: :cascade do |t|
    t.string   "name",        null: false
    t.float    "avg_rating",  null: false
    t.string   "maker",       null: false
    t.string   "wine_type",   null: false
    t.string   "varietal",    null: false
    t.text     "description", null: false
    t.string   "grown"
    t.integer  "vintage"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

end
