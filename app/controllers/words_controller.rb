class WordsController < ApplicationController

  respond_to :json

  def index
    respond_with Word.order("entry").limit( 200 )
  end

  # GET /sinonimos/amor
  def sinonimos
    @meanings = Word.includes(:meanings => :synonims).find_by_entry(params[:name]).meanings

    respond_with(@meanings) do |format|
      format.json { render json: @meanings.as_json(only: [:id], include: {synonims: {only: [:entry]}}) }
    end
  end
end
