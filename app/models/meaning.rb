class Meaning < ActiveRecord::Base
  has_and_belongs_to_many :words
  has_and_belongs_to_many :synonims, :class_name => "Word"
#    def true_sins
#      where('word_id <> ?', 1)
#      puts proxy_association.owner.proxy_association.owner
#    end
#  end
end
