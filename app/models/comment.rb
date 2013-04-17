class Comment < ActiveRecord::Base
  attr_accessible :description, :status, :word_id
end
