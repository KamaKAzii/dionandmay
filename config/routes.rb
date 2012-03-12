Dionandmay::Application.routes.draw do

  devise_for :users, :controllers => {:sessions => 'sessions'}
  root :to => 'welcome#index'
  match 'welcome/:action', :controller => 'welcome'

end
