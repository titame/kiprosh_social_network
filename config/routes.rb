Rails.application.routes.draw do
  mount CoreBox::Engine => "/core_box"
  root "pages#timeline"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "login", to: "application#login"
  get "signup", to: "application#signup"
  post 'logout', to: 'application#logout'
  get "timeline", to: "pages#timeline"
  namespace :api, defaults: { format: "json" }  do
    namespace :v1 do
      resources :events
      get 'login', to: 'application#login'
      post "photos/upload", to: "photos#upload"
      post "albums", to: "albums#create"
    end
  end
end
