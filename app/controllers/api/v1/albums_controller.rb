module Api
  module V1
    class AlbumsController < ApplicationController
      def create
        album = Album.create(name: params[:name], event_id: params[:event_id])
        if album.valid?
          render json: { album_id: album.id }, status: :success
        else
          render json: { errors: album.errors.full_messages }, status: :bad_request
        end
      end
    end
  end
end
