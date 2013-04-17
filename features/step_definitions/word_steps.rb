# Add a declarative step here for populating the DB with words

Given /the following words exist/ do |words_table|
  words_table.hashes.each do |word|
    # each returned element will be a hash whose key is the table header.
    # you should arrange to add that movie to the database here.
    Word.create( movie )
  end
end

# Make sure that one string (regexp) occurs before or after another one
#   on the same page

Then /I should see "(.*)" before "(.*)"/ do |e1, e2|
  text = page.body.to_s.gsub(/\n/," ")
  if text.respond_to? :should
   text.should =~ /#{e1}.*#{e2}/
  else
    assert_match(/#{e1}.*#{e2}/, text )
  end
end

# Make it easier to express checking or unchecking several boxes at once
#  "When I uncheck the following ratings: PG, G, R"
#  "When I check the following ratings: G"

When /I (un)?check the following ratings: (.*)/ do |uncheck, rating_list|
  rating_list.split(",").each do |rating|
    rating = "ratings_" + rating.strip.gsub(%{"}, "")
    step %{I #{uncheck}check "#{rating}"}
  end
end

When /I (un)?check all the ratings/ do |uncheck|

  ratings = [ "G", "PG", "R", "PG-13", "NC-17" ]

  ratings.each do |rating|
    rating = "ratings_" + rating
    step %{I #{uncheck}check "#{rating}"}
  end
end

Then /^(?:|the )"Rating" column in the "movies" table should( not)? contain the following ratings: (.*)/ do |not_see, rating_list|
  rating_list.split(",").each do |rating|
    rating = rating.strip.gsub(%{"}, "")
    if ( not_see ) then
      page.should_not have_css("#movies tbody tr td[2]", :text => /^#{rating}$/ )
    else
      page.should have_css("#movies tbody tr td[2]", :text => /^#{rating}$/ )
    end
  end
end

Then /^I should see ([0-9]+|all of the) movies$/ do |any|

  expected_count = (any=="all of the") ? Movie.count : any.to_i
  rows = page.all('#movies tbody tr').count

  if rows.respond_to? :should
    rows.should == expected_count
  else
    assert_equal expected_count, rows
  end
end

Then /^the director of "([^"]*)" should be "([^"]*)"$/ do |title, director|
  real_director = Movie.find_by_title( title ).director
  real_director.should == director
end


