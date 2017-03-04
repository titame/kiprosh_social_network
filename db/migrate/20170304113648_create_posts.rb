class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.belongs_to :event
      t.text :content

      t.timestamps
    end
  end
end
