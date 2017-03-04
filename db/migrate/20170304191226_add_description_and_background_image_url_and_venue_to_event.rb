class AddDescriptionAndBackgroundImageUrlAndVenueToEvent < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :description, :text
    add_column :events, :background_image_url, :text
    add_column :events, :venue, :string
  end
end
