class Meaning < ActiveRecord::Base
  has_many :significations
  has_many :synonims, :through => :significations, :class_name => "Word" do
    def true_sins wordid
      if wordid
        where('significations.word_id <> ?', word_id )
      else
        self
      end
    end
  end
end
