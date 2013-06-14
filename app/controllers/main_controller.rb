class MainController < ApplicationController

  def show
    searchterm = params[:name]
    @word = Word.includes(:meanings => :synonims).where('`synonims_meanings`.`entry` != ?', searchterm).find_by_entry(searchterm)
    if @word.blank?
      render 'not_found'
    end
  end

  def search
    redirect_to "/" + params[:name]
  end
end
