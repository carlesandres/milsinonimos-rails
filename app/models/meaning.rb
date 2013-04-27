class Meaning < ActiveRecord::Base
  has_many :significations
  has_many :synonims, :through => :significations, :class_name => "Word"
end
