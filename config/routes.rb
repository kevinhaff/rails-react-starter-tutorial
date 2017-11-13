Rails.application.routes.draw do
  resources :tasks
  resources :home
   devise_for :users
   resources :users, only: [:index, :update] do
      member do
        delete :removed
      end
   end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
   root to: "home#index"
end
