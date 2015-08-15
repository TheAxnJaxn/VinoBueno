Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :wines do
      get 'search', on: :collection
    end
    resources :images
    resources :reviews, only: [:create, :update, :destroy]
  end

end
