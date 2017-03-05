class Event < ApplicationRecord
  belongs_to :event_type
  has_many :albums
  has_many :posts
end
