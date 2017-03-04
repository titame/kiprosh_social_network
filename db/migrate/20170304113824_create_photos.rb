class CreatePhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :photos do |t|
      t.belongs_to :album
      t.string :caption
      t.text :description

      t.timestamps
    end
  end
end
