class Word < ActiveRecord::Base
  attr_accessible :entry
  has_many :significations
  has_many :meanings, :through => :significations
end
