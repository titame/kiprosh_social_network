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

      def create
        event = Event.new(event_params)
        if params[:startDate] && params[:endDate]
          event.start_time = DateTime.parse(params[:startDate])
          event.end_time = DateTime.parse(params[:endDate])
        end
        event.creator_id = session['current_person_id']
        if event.save
          render json: { message: "Event created successfully!" }
        else
          render json: { errors: event.errors.full_messages }, status: :bad_request
        end
      end

      private

      def event_params
        params.require(:event).permit(:event_type_id, :name, :description, :venue)
      end
    end
  end
end
