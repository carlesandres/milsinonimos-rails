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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130426224218) do

  create_table "meanings", :force => true do |t|
    t.datetime "created_at", :null => false
    t.datetime "updated_at"
  end

  create_table "rejection_causes", :force => true do |t|
    t.string "description", :limit => 40, :null => false
  end

  create_table "searches", :force => true do |t|
    t.integer  "word_id",    :null => false
    t.datetime "created_at", :null => false
    t.datetime "updated_at"
  end

  add_index "searches", ["word_id"], :name => "word_id"

  create_table "suggestions", :force => true do |t|
    t.string   "word",               :limit => 256, :null => false
    t.integer  "status",             :limit => 2,   :null => false
    t.datetime "created_at",                        :null => false
    t.integer  "rejection_cause_id"
    t.integer  "user_meant_word_id"
    t.datetime "updated_at"
  end

  create_table "user_comments", :force => true do |t|
    t.timestamp "timestamp",                      :null => false
    t.string    "email",           :limit => 70,  :null => false
    t.integer   "word_id",                        :null => false
    t.text      "comments",        :limit => 255, :null => false
    t.integer   "revision_status"
  end

  create_table "usuarios", :force => true do |t|
    t.string "username", :limit => 256, :null => false
    t.string "password", :limit => 40,  :null => false
  end

  create_table "word_meanings", :force => true do |t|
    t.integer   "word_id",    :default => 0, :null => false
    t.integer   "meaning_id", :default => 0, :null => false
    t.integer   "use_id"
    t.timestamp "when_added",                :null => false
  end

  add_index "word_meanings", ["meaning_id"], :name => "meaning_id"
  add_index "word_meanings", ["word_id"], :name => "word_id"

  create_table "words", :force => true do |t|
    t.string   "entry",      :default => "", :null => false
    t.datetime "changed_at",                 :null => false
    t.datetime "updated_at"
  end

  add_index "words", ["entry"], :name => "word", :unique => true

end
