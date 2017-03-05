module Api
  module V1
    class ApplicationController < ActionController::API
      include CoreBox::Authentication

      # Will authenticate all request. Pass token in headers or params i.e params[:token] or request.headers[:token] should have token.
      before_filter :authenticate!

      def login
        resond_to do |format|
          format.html { render template: '/login.html' }
        end
      end
    end
  end
end
