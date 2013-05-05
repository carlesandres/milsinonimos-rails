class Meaning < ActiveRecord::Base
  has_and_belongs_to_many :words
  has_and_belongs_to_many :synonims, :class_name => "Word"

  #has_and_belongs_to_many :sono, :class_name => "Word", :conditions => proc { ["`words`.`id` <> ?", proxy_association.owner.id] }
end
