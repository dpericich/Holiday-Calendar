import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h2 className="about__title">About</h2>
            
            <p className="about__text" data-test="about">The 2020 Holiday app is a tool to help promote fun learning during this holiday season. Similar to an Advent Calendar, there are 25 different days. Every 5
            days form a section, and once a full section is completed, a new feature is unlocked on the homepage. Each day includes a question focusing on a school topic whether math and science, 
            or English and history that will reinforce what the students are learning. The subjects of the calendar have been decided on and well planned out by your teacher. Please reach out to them with any questions 
            about the content, or if you are having issues with the app, refer to the Question and Answer link at the bottom of the page. 
            </p>
            <p className="about__text" data-test="about">
                This app was created using a variety of front end technologies. These include React as the javascript framework, React Routers to handle routing, SASS as the preprocessor for CSS
                and of course HTML5 for the DOM. It also contains the Google Translate API for the multilingual translation features. The testing suite is made up of Jest with Enzyme, and check-props for 
                looking at props sharing between components. The app was deployed and is hosted on Heroku.
            </p>
        </div>
    )
};

export default About;