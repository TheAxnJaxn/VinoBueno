Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do

    resources :wines do
      get 'search', on: :collection
    end
    
    resources :images, only: [:create]
    resources :reviews, only: [:create, :update, :destroy, :index, :show]
    resources :cellars, only: [:index, :create, :show]
    resources :cellarings, only: [:create, :destroy, :update]
  end

end
