Rails.application.routes.draw do
  root 'welcome#index'
  get '/', to: 'welcome#index'
  get '/api/request', to: 'welcome#make_request'
end