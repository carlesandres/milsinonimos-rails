require 'spec_helper'

describe "meanings/show" do
  before(:each) do
    @meaning = assign(:meaning, stub_model(Meaning))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
