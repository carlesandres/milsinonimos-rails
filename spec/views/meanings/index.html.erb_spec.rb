require 'spec_helper'

describe "meanings/index" do
  before(:each) do
    assign(:meanings, [
      stub_model(Meaning),
      stub_model(Meaning)
    ])
  end

  it "renders a list of meanings" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
  end
end
