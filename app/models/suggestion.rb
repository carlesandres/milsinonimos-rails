class Suggestion < ActiveRecord::Base
  attr_accessible :autocorrected_word_id, :status, :word
end
