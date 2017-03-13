class ApplicationController < ActionController::Base
  protect_from_forgery

  before_action :redirect_to_events, only: [:login, :signup]
  before_action :redirect_to_login, only: [:timeline]

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

  def logout
    CoreBox::AccessToken.where(person_id: session[:current_person_id]).destroy_all
    session['current_person_id'] = nil
    head :ok
  end

  private
  def redirect_to_login
    unless(CoreBox::AccessToken.exists?(token: params[:token]) || session['current_person_id'])
      session['current_person_id'] = nil
      return(redirect_to(login_path))
    end
  end

  def redirect_to_events
    return(redirect_to(timeline_path)) if session['current_person_id']
  end
end
