class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :name
      t.text :description
      t.belongs_to :event

      t.timestamps
    end
  end
end
