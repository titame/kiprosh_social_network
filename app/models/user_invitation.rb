class UserInvitation < ApplicationRecord
  belongs_to :event
  belongs_to :person, class_name: "CoreBox::Person"
end
