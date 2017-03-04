class Event < ApplicationRecord
  belongs_to :event_type
  has_many :posts
  has_many :albums
  has_many :user_invitations

  validates :name, presence: true, uniqueness: true

  after_create :generate_user_invitation

  def generate_user_invitation
    CoreBox::Person.find_each{|person| self.user_invitations.create(person: person) }
  end
end
