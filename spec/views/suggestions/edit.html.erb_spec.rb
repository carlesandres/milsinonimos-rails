require 'spec_helper'

describe "suggestions/edit" do
  before(:each) do
    @suggestion = assign(:suggestion, stub_model(Suggestion,
      :word => "MyString",
      :status => 1,
      :autocorrected_word_id => 1
    ))
  end

  it "renders the edit suggestion form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", suggestion_path(@suggestion), "post" do
      assert_select "input#suggestion_word[name=?]", "suggestion[word]"
      assert_select "input#suggestion_status[name=?]", "suggestion[status]"
      assert_select "input#suggestion_autocorrected_word_id[name=?]", "suggestion[autocorrected_word_id]"
    end
  end
end
