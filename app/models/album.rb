class Album < ApplicationRecord
  belongs_to :event
  has_many :photos

  validates :name, presence: true
end
