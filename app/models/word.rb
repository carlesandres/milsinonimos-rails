class Word < ActiveRecord::Base
  attr_accessible :entry
  has_many :significances
  has_many :meanings, :through => :significances
end
