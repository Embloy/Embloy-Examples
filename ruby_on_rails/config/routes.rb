Rails.application.routes.draw do
  root 'welcome#index'
  get '/', to: 'welcome#index'
  post '/api/request', to: 'welcome#make_request'
end