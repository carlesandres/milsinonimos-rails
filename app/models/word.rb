class Word < ActiveRecord::Base
  attr_accessible :entry
  has_and_belongs_to_many :meanings
  scope :syno, includes(:meanings => :synonims.filtered( &:id) )



  def to_param
    "#{name}"
  end
end
