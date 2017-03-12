module Api
  module V1
    class AlbumsController < ApplicationController
      def create
        album = Album.create(name: params[:name], event_id: params[:event_id])
        if album.valid?
          params[:images].each do |key, image|
            album.photos.create(filename: image["name"], url: image["url"])
          end
          render json: { message: "Album created successfully!" }
        else
          render json: { errors: album.errors.full_messages }, status: :bad_request
        end
      end
    end
  end
end
