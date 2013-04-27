class Signification < ActiveRecord::Base
  # attr_accessible :title, :body
  belongs_to :word
  belongs_to :meaning
  belongs_to :synonim, :class_name => "Word", :foreign_key => "word_id"
end
