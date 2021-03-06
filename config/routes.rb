Rails.application.routes.draw do

  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :wines
    resources :images, only: [:create]
    resources :reviews, only: [:create, :update, :destroy, :index, :show]
    resources :cellars, only: [:index, :create, :show, :destroy, :update]
    resources :cellarings, only: [:create, :destroy, :update]
    resources :feeds, only: [:index]
  end

end
