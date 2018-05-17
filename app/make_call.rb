require 'twilio-ruby'

# Get your Account Sid and Auth Token from twilio.com/console
account_sid = 'ACbf3de5cbd985f695e87e0ba3a415852d'
auth_token = '2a5a38831eca2cb9befb6c73fbcd0d1d'

# set up a client to talk to the Twilio REST API
@client = Twilio::REST::Client.new(account_sid, auth_token)

call = @client.calls.create(
    to: "+16787046881",
    from: "+16784338387",
    url: "http://demo.twilio.com/docs/voice.xml")
puts call.to