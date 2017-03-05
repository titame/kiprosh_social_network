class AddCreatorIdToAlbumAndPostsAndEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :albums, :creator_id, :integer
    add_column :posts, :creator_id, :integer
    add_column :events, :creator_id, :integer
  end
end
