class SetDefaultForAcceptedInUserInvitations < ActiveRecord::Migration[5.0]
  def up
    change_column :user_invitations, :accepted, :boolean, default: false
  end

  def down
    change_column :user_invitations, :accepted, :boolean, default: nil
  end
end
