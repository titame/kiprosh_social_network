class Photo < ApplicationRecord
  belongs_to :album

  validates :url, presence: true
  validates :filename, presence: true
end
