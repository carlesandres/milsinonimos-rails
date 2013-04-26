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

ActiveRecord::Schema.define(:version => 20130426213430) do

  create_table "meanings", :force => true do |t|
    t.string    "distinction"
    t.integer   "subject_id"
    t.integer   "hidden",           :limit => 1, :default => 0
    t.integer   "check_count",                   :default => 0, :null => false
    t.integer   "super_id"
    t.integer   "morphologic_id"
    t.integer   "morphologic_1_id"
    t.integer   "morphologic_2_id"
    t.timestamp "when_added",                                   :null => false
  end

  create_table "rejection_causes", :force => true do |t|
    t.string "cause_short_description", :limit => 40, :null => false
  end

  create_table "search_history", :force => true do |t|
    t.integer   "word_id",      :null => false
    t.timestamp "timeofsearch", :null => false
  end

  add_index "search_history", ["word_id"], :name => "word_id"

  create_table "suggested", :force => true do |t|
    t.string    "word",               :limit => 256, :null => false
    t.integer   "status",             :limit => 2,   :null => false
    t.timestamp "when_suggested",                    :null => false
    t.integer   "rejection_cause_id"
    t.integer   "user_meant_word_id"
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

  create_table "word_mapping", :id => false, :force => true do |t|
    t.integer "derived_id", :default => 0, :null => false
    t.integer "base_id",    :default => 0, :null => false
  end

  add_index "word_mapping", ["derived_id"], :name => "derived_id"

  create_table "word_meanings", :force => true do |t|
    t.integer   "word_id",    :default => 0, :null => false
    t.integer   "meaning_id", :default => 0, :null => false
    t.integer   "use_id"
    t.timestamp "when_added",                :null => false
  end

  add_index "word_meanings", ["meaning_id"], :name => "meaning_id"
  add_index "word_meanings", ["word_id"], :name => "word_id"

  create_table "words", :force => true do |t|
    t.string    "word",      :default => "", :null => false
    t.string    "lookup"
    t.timestamp "was_added",                 :null => false
  end

  add_index "words", ["word"], :name => "word", :unique => true

end
