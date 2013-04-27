require 'spec_helper'

describe "meanings/new" do
  before(:each) do
    assign(:meaning, stub_model(Meaning).as_new_record)
  end

  it "renders new meaning form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", meanings_path, "post" do
    end
  end
end
