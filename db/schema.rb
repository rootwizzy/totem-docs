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

ActiveRecord::Schema.define(version: 3) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "totem_lodestar_documents", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.string   "slug"
    t.integer  "order"
    t.integer  "section_id"
    t.integer  "version_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["section_id"], name: "index_totem_lodestar_documents_on_section_id", using: :btree
    t.index ["version_id"], name: "index_totem_lodestar_documents_on_version_id", using: :btree
  end

  create_table "totem_lodestar_sections", force: :cascade do |t|
    t.string   "title"
    t.string   "slug"
    t.integer  "order"
    t.integer  "parent_id"
    t.integer  "version_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_totem_lodestar_sections_on_parent_id", using: :btree
    t.index ["version_id"], name: "index_totem_lodestar_sections_on_version_id", using: :btree
  end

  create_table "totem_lodestar_versions", force: :cascade do |t|
    t.string   "title"
    t.string   "slug"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
