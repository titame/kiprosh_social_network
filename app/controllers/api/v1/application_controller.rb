module Api
  module v1
    class ApplicationController < ActionController::API
      protect_from_forgery with: :exception
      include CoreBox::Authentication

      # Will authenticate all request. Pass token in headers or params i.e params[:token] or request.headers[:token] should have token.
      before_filter :authenticate!
    end
  end
end
