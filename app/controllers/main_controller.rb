class MainController < ApplicationController

  def show
    @word = Word.includes(:meanings => :synonims).find_by_entry(params[:name])

  end
end
