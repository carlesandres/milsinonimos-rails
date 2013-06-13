class WordsController < ApplicationController

  respond_to :json

  def index
    respond_with Word.order("entry").limit( 200 )
  end

  # GET /sinonimos/amor
  def sinonimos
    @meanings = Word.syno.find_by_entry(params[:name])

    if @meanings.blank?
      @meanings = { :entry => params[:name], :status => 'not_found' }
    end

    respond_with(@meanings) do |format|
      format.json { render json: @meanings.as_json(only: [:entry, :status], include: {meanings: {only: [:id], include: {synonims: {only: [:entry]}}}}) }
    end
  end
end
