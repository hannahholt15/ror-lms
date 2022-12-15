class User < ApplicationRecord
  has_many :enrollments, dependent: :destroy
  has_many :courses, through: :enrollments
  validates :first_name, :last_name, :email, :password, :img, presence: true
  validates :email, uniqueness: true
end