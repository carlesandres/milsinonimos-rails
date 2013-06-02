class MainController < ApplicationController

  def show
    #@meanings = Word.includes(:meanings => :synonims).find_by_entry(params[:name])

#    respond_with(@meanings) do |format|
#      format.json { render json: @meanings.as_json(only: [:entry], include: {meanings: {only: [:id], include: {synonims: {only: [:entry]}}}}) }
#    end

    render :nothing => true

  end
end
