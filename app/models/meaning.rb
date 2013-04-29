class Meaning < ActiveRecord::Base
  has_many :significations
  has_many :synonims, :through => :significations, :class_name => "Word" do
    def true_sins
      puts self.proxy_association.target
    end
  end
end
