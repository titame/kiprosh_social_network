module Api
  module V1
    class PhotosController < ApplicationController
      def upload
        begin
          album = Album.find_by(id: params[:album_id])
          response = Cloudinary::Uploader.upload(params[:file], :public_id => params[:file].original_filename, :cloud => "tempcloud")
          photo = album.photos.create(url: response[:url], filename: response[:public_id])
        rescue Exception => e
          puts "Exception: #{e.message}"
        end
        if photo.valid?
          render json: { uid: -1, name: response[:public_id], status: 'done',
            url: response[:secure_url], response: { :status => "success"}
          }
        else
          render json: { errors: photo.errors.full_messages },
            status: :bad_request
        end
      end
    end
  end
end
