class Api::CallsController < ApplicationController
    require 'twilio-ruby'


    @client = Twilio::REST::Client.new account_sid, auth_token 
    puts 'Client: '
    puts @client

    def call
    message = @client.messages.create(
        body: "Hello from Ruby",
        to: "+16787046881",    # Replace with your phone number
        from: "+16784338387")  # Replace with your Twilio number

    puts message.sid
    end 

    # def call
    #   @call = @client.api.account.calls.create(
    #         from: '+16784338387',
    #         to: '+16787046881',
    #         url: 'http://demo.twilio.com/docs/voice.xml',

    #     )

    # end
end
