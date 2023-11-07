Rails.application.routes.draw do
root to: "zeikins#index"
resources :zeikins, only: :index
end
