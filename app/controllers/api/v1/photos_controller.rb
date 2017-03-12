module Api
  module V1
    class PhotosController < ApplicationController
      def upload
        begin
          response = Cloudinary::Uploader.upload(params[:file], :public_id => params[:file].original_filename, :cloud => "tempcloud")
        rescue Exception => e
          puts "Exception: #{e.message}"
          render json: { errors: e.message }, status: :bad_request
        end
        render json: {url: response["secure_url"] }
      end
    end
  end
end
