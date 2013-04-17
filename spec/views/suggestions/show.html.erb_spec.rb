require 'spec_helper'

describe "suggestions/show" do
  before(:each) do
    @suggestion = assign(:suggestion, stub_model(Suggestion,
      :word => "Word",
      :status => 1,
      :autocorrected_word_id => 2
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Word/)
    rendered.should match(/1/)
    rendered.should match(/2/)
  end
end
