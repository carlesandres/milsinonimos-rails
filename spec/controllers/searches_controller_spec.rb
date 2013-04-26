require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

describe SearchesController do

  # This should return the minimal set of attributes required to create a valid
  # Search. As you add validations to Search, be sure to
  # update the return value of this method accordingly.
  def valid_attributes
    { "word_id" => "1" }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # SearchesController. Be sure to keep this updated too.
  def valid_session
    {}
  end

  describe "GET index" do
    it "assigns all searches as @searches" do
      search = Search.create! valid_attributes
      get :index, {}, valid_session
      assigns(:searches).should eq([search])
    end
  end

  describe "GET show" do
    it "assigns the requested search as @search" do
      search = Search.create! valid_attributes
      get :show, {:id => search.to_param}, valid_session
      assigns(:search).should eq(search)
    end
  end

  describe "GET new" do
    it "assigns a new search as @search" do
      get :new, {}, valid_session
      assigns(:search).should be_a_new(Search)
    end
  end

  describe "GET edit" do
    it "assigns the requested search as @search" do
      search = Search.create! valid_attributes
      get :edit, {:id => search.to_param}, valid_session
      assigns(:search).should eq(search)
    end
  end

  describe "POST create" do
    describe "with valid params" do
      it "creates a new Search" do
        expect {
          post :create, {:search => valid_attributes}, valid_session
        }.to change(Search, :count).by(1)
      end

      it "assigns a newly created search as @search" do
        post :create, {:search => valid_attributes}, valid_session
        assigns(:search).should be_a(Search)
        assigns(:search).should be_persisted
      end

      it "redirects to the created search" do
        post :create, {:search => valid_attributes}, valid_session
        response.should redirect_to(Search.last)
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved search as @search" do
        # Trigger the behavior that occurs when invalid params are submitted
        Search.any_instance.stub(:save).and_return(false)
        post :create, {:search => { "word_id" => "invalid value" }}, valid_session
        assigns(:search).should be_a_new(Search)
      end

      it "re-renders the 'new' template" do
        # Trigger the behavior that occurs when invalid params are submitted
        Search.any_instance.stub(:save).and_return(false)
        post :create, {:search => { "word_id" => "invalid value" }}, valid_session
        response.should render_template("new")
      end
    end
  end

  describe "PUT update" do
    describe "with valid params" do
      it "updates the requested search" do
        search = Search.create! valid_attributes
        # Assuming there are no other searches in the database, this
        # specifies that the Search created on the previous line
        # receives the :update_attributes message with whatever params are
        # submitted in the request.
        Search.any_instance.should_receive(:update_attributes).with({ "word_id" => "1" })
        put :update, {:id => search.to_param, :search => { "word_id" => "1" }}, valid_session
      end

      it "assigns the requested search as @search" do
        search = Search.create! valid_attributes
        put :update, {:id => search.to_param, :search => valid_attributes}, valid_session
        assigns(:search).should eq(search)
      end

      it "redirects to the search" do
        search = Search.create! valid_attributes
        put :update, {:id => search.to_param, :search => valid_attributes}, valid_session
        response.should redirect_to(search)
      end
    end

    describe "with invalid params" do
      it "assigns the search as @search" do
        search = Search.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Search.any_instance.stub(:save).and_return(false)
        put :update, {:id => search.to_param, :search => { "word_id" => "invalid value" }}, valid_session
        assigns(:search).should eq(search)
      end

      it "re-renders the 'edit' template" do
        search = Search.create! valid_attributes
        # Trigger the behavior that occurs when invalid params are submitted
        Search.any_instance.stub(:save).and_return(false)
        put :update, {:id => search.to_param, :search => { "word_id" => "invalid value" }}, valid_session
        response.should render_template("edit")
      end
    end
  end

  describe "DELETE destroy" do
    it "destroys the requested search" do
      search = Search.create! valid_attributes
      expect {
        delete :destroy, {:id => search.to_param}, valid_session
      }.to change(Search, :count).by(-1)
    end

    it "redirects to the searches list" do
      search = Search.create! valid_attributes
      delete :destroy, {:id => search.to_param}, valid_session
      response.should redirect_to(searches_url)
    end
  end

end
