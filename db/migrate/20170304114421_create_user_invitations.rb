class CreateUserInvitations < ActiveRecord::Migration[5.0]
  def change
    create_table :user_invitations do |t|
      t.belongs_to :event, foreign_key: true
      t.boolean :accepted
      t.integer :person_id

      t.timestamps
    end
  end
end
