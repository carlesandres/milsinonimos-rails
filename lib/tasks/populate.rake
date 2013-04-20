namespace :db do
  desc "Erase and fill database with random data"
  task :populate => :environment do
    require 'populator'

    [Word, Meaning, Suggestion, Comment].each(&:delete_all)

    Meaning.populate 70 do |meaning|
    end

    Word.populate 20 do |word|
      word.entry = Populator.words(1)
    end

    Suggestion.populate 40 do |suggestion| 
      suggestion.word = Populator.words(1)
      suggestion.status = 1
    end

    Comment.populate 20 do |comment| 
      comment.description = Populator.words(5)
      comment.status = 1
    end
  end
end
