class Meaning < ActiveRecord::Base
  has_and_belongs_to_many :words
  has_and_belongs_to_many :synonims, :class_name => "Word"
end
