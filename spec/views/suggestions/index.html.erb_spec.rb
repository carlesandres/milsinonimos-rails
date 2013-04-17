require 'spec_helper'

describe "suggestions/index" do
  before(:each) do
    assign(:suggestions, [
      stub_model(Suggestion,
        :word => "Word",
        :status => 1,
        :autocorrected_word_id => 2
      ),
      stub_model(Suggestion,
        :word => "Word",
        :status => 1,
        :autocorrected_word_id => 2
      )
    ])
  end

  it "renders a list of suggestions" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Word".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
