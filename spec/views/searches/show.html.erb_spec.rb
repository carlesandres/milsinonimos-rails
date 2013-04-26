require 'spec_helper'

describe "searches/show" do
  before(:each) do
    @search = assign(:search, stub_model(Search,
      :word_id => 1
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
  end
end
