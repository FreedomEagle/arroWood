Rails.application.routes.draw do
  resources :videos
  root      'home#index'
  resources :home, only: [:index, :new, :create]
   
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
