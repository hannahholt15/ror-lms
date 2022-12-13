class Course < ApplicationRecord

    validates :title, :course_number, :desc, :ctype, presence: true
    validates :course_number, numericality: { only_integer: true }
  end