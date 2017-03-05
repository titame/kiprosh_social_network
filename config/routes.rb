Rails.application.routes.draw do
  mount CoreBox::Engine => "/core_box"
  root "pages#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'api/v1/login', to: 'application#login'
  namespace :api, defaults: { format: "json" }  do
    namespace :v1 do
      resources :events
    end
  end
end
