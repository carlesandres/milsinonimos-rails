# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :suggestion do
    word "MyString"
    status 1
    autocorrected_word_id 1
  end
end
