Rails.application.routes.draw do
  mount CoreBox::Engine => "/core_box"
  root "pages#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: "json" }  do
    namespace :v1 do
      get "events", to: "events#index"
      
    end
  end
end
