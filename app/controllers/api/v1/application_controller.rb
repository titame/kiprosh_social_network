module Api
  module V1
    class ApplicationController < ActionController::Base
      protect_from_forgery
      include CoreBox::Authentication
      # before_action :redirect_to_login, except: [:login, :signup]

      # Will authenticate all request. Pass token in headers or params i.e params[:token] or request.headers[:token] should have token.
      before_filter :authenticate!

      private

      def redirect_to_login
        return(redirect_to(login_path)) unless session['current_person_id']
      end
    end
  end
end
