class Meaning < ActiveRecord::Base
  has_many :significances
  has_many :words, :through => :significances
end
