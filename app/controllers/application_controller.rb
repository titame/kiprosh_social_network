class ApplicationController < ActionController::Base
  protect_from_forgery

  before_action :redirect_to_events, only: [:login, :signup]
  # before_action :redirect_to_login, except: [:login, :signup]

  def login
    respond_to do |format|
      format.html do
        render template: '/login.html'
      end
    end
  end
  def signup
    respond_to do |format|
      format.html do
        render template: '/signup.html'
      end
    end
  end

  private
  def redirect_to_login
    return(redirect_to(login_path)) unless session['current_person_id']
  end

  def redirect_to_events
    return(redirect_to(timeline_path)) if session['current_person_id']
  end
end
