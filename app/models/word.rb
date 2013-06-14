class Word < ActiveRecord::Base
  attr_accessible :entry
  has_and_belongs_to_many :meanings

  def to_param
    "#{name}"
  end
end
