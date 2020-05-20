class VideosController < ApplicationController
    def show
        @videos= ['hi' ,'hello', 'hiya']
        respond_to do |format|
            format.html {}
    end
end
end