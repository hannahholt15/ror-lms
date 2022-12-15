class Course < ApplicationRecord
  has_many :enrollments, dependent: :destroy
  has_many :users, through: :enrollments
  validates :title, :course_number, :desc, :ctype, presence: true
  validates :course_number, numericality: { only_integer: true }
end