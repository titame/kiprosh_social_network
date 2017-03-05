class AddImageUrlToPhoto < ActiveRecord::Migration[5.0]
  def change
    add_column :photos, :image_url, :text
  end
end
