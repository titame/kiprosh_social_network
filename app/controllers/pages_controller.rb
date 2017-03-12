class PagesController < ApplicationController
  layout 'application_without_bootstrap', only: [:timeline]

  def home
  end

  def timeline
  end
end
