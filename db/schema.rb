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

ActiveRecord::Schema.define(:version => 0) do

  create_table "antonyms", :force => true do |t|
    t.integer "word_meaning_id1", :default => 0, :null => false
    t.integer "word_meaning_id2", :default => 0, :null => false
  end

  add_index "antonyms", ["word_meaning_id1", "word_meaning_id2"], :name => "word_meaning_id1"
  add_index "antonyms", ["word_meaning_id1"], :name => "word_meaning_id1_2", :unique => true
  add_index "antonyms", ["word_meaning_id2"], :name => "word_meaning_id2", :unique => true

  create_table "db_sequence", :primary_key => "seq_name", :force => true do |t|
    t.integer "nextid", :default => 0, :null => false
  end

  create_table "meanings", :force => true do |t|
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "old_removed_words", :force => true do |t|
    t.string "word", :limit => 256, :null => false
  end

  create_table "rejection_causes", :force => true do |t|
    t.string "cause_short_description", :limit => 40, :null => false
  end

  create_table "search_history", :force => true do |t|
    t.integer   "word_id",      :null => false
    t.timestamp "timeofsearch", :null => false
  end

  add_index "search_history", ["word_id"], :name => "word_id"

  create_table "significations", :id => false, :force => true do |t|
    t.integer   "word_id",    :default => 0, :null => false
    t.integer   "meaning_id", :default => 0, :null => false
    t.integer   "use_id"
    t.timestamp "when_added",                :null => false
  end

  create_table "subjects", :force => true do |t|
    t.string "subject",     :limit => 50, :default => "", :null => false
    t.string "explanation"
  end

  add_index "subjects", ["subject"], :name => "subject"

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

  create_table "uses", :force => true do |t|
    t.string "name",      :default => "", :null => false
    t.string "shortname", :default => "", :null => false
  end

  add_index "uses", ["name"], :name => "name", :unique => true

  create_table "words", :force => true do |t|
    t.string    "entry"
    t.string    "lookup"
    t.timestamp "was_added", :null => false
  end

  add_index "words", ["entry"], :name => "word", :unique => true

end
