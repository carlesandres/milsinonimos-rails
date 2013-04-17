# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :comment do
    word_id 1
    description "MyString"
    status 1
  end
end
