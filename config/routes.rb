Rails.application.routes.draw do
  
  namespace :api do
    resources :courses 
    resources :users
  end

end
