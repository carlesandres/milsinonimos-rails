class WordsController < ApplicationController

  respond_to :json

  def index
    respond_with Word.order("entry").limit( 200 )
  end

  # GET /sinonimos/amor
  def sinonimos
    searchterm = params[:name]
    @meanings = Word.includes(:meanings => :synonims).where('`synonims_meanings`.`entry` != ?', searchterm).find_by_entry(searchterm)

    if @meanings.blank?
      @meanings = { :entry => searchterm, :status => 'not_found' }
    end

    respond_with(@meanings) do |format|
      format.json { render json: @meanings.as_json(only: [:entry, :status], include: {meanings: {only: [:id], include: {synonims: {only: [:entry]}}}}) }
    end
  end
end
