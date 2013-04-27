require 'spec_helper'

describe "meanings/edit" do
  before(:each) do
    @meaning = assign(:meaning, stub_model(Meaning))
  end

  it "renders the edit meaning form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", meaning_path(@meaning), "post" do
    end
  end
end
