class Meaning < ActiveRecord::Base
  has_many :significations
  has_many :words, :through => :significations
end
