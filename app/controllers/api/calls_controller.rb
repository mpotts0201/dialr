require 'twilio-ruby'

class Api::CallsController < ApplicationController



    def call
        @number = params[:number]

        account_sid = ENV["ACCOUNT_SID"]
        auth_token = ENV["AUTH_TOKEN"]

        @client = Twilio::REST::Client.new(account_sid, auth_token)

        call = @client.calls.create(
            to: "+#{@number}",
            from: "+16784338387",
            url: "http://demo.twilio.com/docs/voice.xml")
        puts call.to
    end


end
