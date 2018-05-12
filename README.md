# dialr

#### Your Personal Contact Management App


## What is dialr?

Welcome to **dialr**, the world's best contact management app.  Simply log in or sign up to begin adding your contacts.  Contacts can be created, edited, and if they never got you back for that Uber that one time, deleted forever at the press of a button!  

**dialr** utitlizes the power of React to adhere to the principle of a single page application, for ease of use and convenience.  

## Some technical details:

* Ruby version 2.4.2

* Deployment will be on heroku

* Uses PostgreSQL for database 

* React Materialize for styling

## Features 

* User authentication with devise, omiauth 

* ~~Clickable phone numbers for integrated twilio calls~~

* Search bar to find a contact by name

* Sort by contact type



## Known bugs and issues

* ~~Loss of user session in devise after contact creation, update, delete.~~
    * ~~I sped taught myself devise, so I'm sure this would be fixable to somebody with more experience, or could be further pursued if I had more time for submission.  The issue seems to stem from a loss of the user session after a single post, patch, or delete is made on contact info.~~
    * ~~This issue can be avoided if a user signs out and back in after each post, patch, or delete.  This leads me to believe that the issue lies with the needed headers for a user session, perhaps the header tokens are not being updated with the post, patch, or delete being made on contact info.~~
    * ~~I have troubleshooted this by experimenting with when and how tokens are saved in the browser's local storage, but to no avail.~~
    * **~~If you experience this issue, clear the local storage in you browser.  You can do this by entering Dev Tools > Application > Right click Local Storage > Clear.  This will simply clear your tokens so you can begin a new user session.~~**
    * Fixed:   config.change_headers_on_each_request = false

* "Bad Search" message comes up unreliably sometimes, sometimes on successful searches, sometimes it does not dismiss on a subsequent correct search.  Could have to do with React's life cycle and not updating state as expected.  

* When making a request, post, patch, or delete, sometimes the list of contacts reorders itself, making it confusing for the user.

* ~~Submit button on new contact modal loses correct positioning at certain view widths. OK on mobile and OK at large widths.~~
    * Fixed: Reformatted new contact form



## Models/ERD

![ERD Models for dialr](/client/src/img/dialrERD.png)



## My Wireframes
![My WireFrame](/client/src/img/dialr_wireframe.jpg)



## Links
* [Heroku Deployment](https://dialrapp.herokuapp.com/)


* [My Trello Board](https://trello.com/b/XLUCrRLf/dialr)
