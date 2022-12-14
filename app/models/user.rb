class User < ApplicationRecord

  validates :first_name, :last_name, :email, :password, :img, presence: true
  validates :email, uniqueness: true
end