module Api
  module V1
    class EventsController < ApplicationController
      def index
        @events = Event.all
      end
    end
  end
end
