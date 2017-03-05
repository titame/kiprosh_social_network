module Api
  module V1
    class EventsController < ApplicationController
      def show
        @event = Event.find(params[:id])
      end

      def index
        offset  = params[:offset] || 0
        @events = Event.offset(offset).limit(5).order(start_time: :desc)
      end
    end
  end
end
