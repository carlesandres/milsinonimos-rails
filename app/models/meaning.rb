class Meaning < ActiveRecord::Base
  has_and_belongs_to_many :words
  belongs_to :synonim, :class_name => "Word"
end
