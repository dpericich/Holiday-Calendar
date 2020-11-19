# 2020 Holiday Calendar - Educational

## Mission
COVID has hit our communities hard over the last few months. Businesses have closed and opened with restricitons and guidlines, large amounts of workers have moved remote and many of the events that many of us look forward to have either been cancelled, or forced to go online. One area that is having to adapt alot is education. 

Schools are a place for learning and social interactions, two things that are fundamental to development and growth for kids. Having to shift from full time in person, to splitting time between in class and zoom meetings, or even just full online classes is a tough and stressful transition. It is even harder when holiday activites such as making your own had turkey, or getting candy for St. Nicholas day is impossible due to online learning. 

In order to make the holiday season a little less dreary, and given students something to look forward to, I decided to make this learning advent calendar. The daily puzzles are not hard, but the payout of a multilingual learning for completing sections of daily puzzles seemed like too good of a thing to pass up. 

My mission with Holiday Calendar is to provide both students and teachers a fun way to complete or reinforce learning topics, while having the opportunity to learn how to say "Happy Holidays" in multiple languages. I am hoping that it will provide a little fun, during what has been a stressful school year!

## Technologies used
Because this Holiday Calendar is geared towards younger students, I decided against building a backend. I figured that my users may not be comfortable setting up a username and password, and so I decided to make the app 100% front end. 

In order to store students' progress, I am using localStorage on their browsers to reload state/progress everytime they return to the site for their daily challenge. The only issue here is if they are using a privateBrowser, or if they do a hard refresh on the page. 

For keeping track of each student's progress, I will be tying in in library to email teachers whenever a student finishes a set of questions. After the fifth question of set is answered correctly, the student will be prompted to enter their name, and an email with their name and the set they finished will be sent to their teach for recording.

The technologies used in this app are:

Development : React, React Routers, SASS, HTML5 
Testing : Jest, Enzyme, CheckProps
Deployment : Heroku