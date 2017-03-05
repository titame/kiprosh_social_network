class Album < ApplicationRecord
  has_many :photos
  belongs_to :event
  has_many :photos

  validates :name, presence: true
end
