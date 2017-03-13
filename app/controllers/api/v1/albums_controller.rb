module Api
  module V1
    class AlbumsController < ApplicationController
      def create
        if params[:images]
          album = Album.create(name: params[:name], event_id: params[:event_id], creator_id: session['current_person_id'])
          if album.valid?
            params[:images].each do |key, image|
              album.photos.create(filename: image["name"], url: image["url"])
            end
            render json: { message: "Album created successfully!" }
          else
            render json: { errors: album.errors.full_messages }, status: :bad_request
          end
        else
          render json: { errors: "No photos found for album!" }, status: :bad_request
        end
      end
    end
  end
end
