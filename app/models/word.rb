class Word < ActiveRecord::Base
  attr_accessible :entry
  has_and_belongs_to_many :meanings
  has_many :synonims, :through => :meanings, :include => :meanings, :conditions => proc { ["`words`.`id` <> ?", self.id] }

  def sino
    self.meanings do |m|
      puts m.synonims
    end
  end
end
