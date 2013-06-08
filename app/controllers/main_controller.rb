class MainController < ApplicationController

  def show
    @word = Word.includes(:meanings => :synonims).find_by_entry(params[:name])
    if @word.blank?
      render 'not_found'
    end
  end

  def search
    redirect_to "/" + params[:name]
  end
end
