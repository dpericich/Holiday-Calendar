import React, {useState} from 'react';
import {questions} from '../../QuestionFile';
import {Link} from 'react-router-dom';

/**
 * @function - getAvailableDays - function populate DropDown with correct available days
 * @param {array} questionsArray - array of objects where each object holds all data for the day
 * @return {array} returns a list of option elements with the correct day
 */

export const getAvailableDays = (questionsArray) => {
    let today = new Date();
    let availableDropDowns = questionsArray.filter(question => (today > question.dataDate)).map(day => {
        return <option key={day.date}>{day.date}</option>
    });
    return availableDropDowns;
}

/**
 * @function getDayForRouting - Function to get day from selected option to route and show question
 * @param {str} - event object returned by onchange of select
 * @return {int} - day for selected question
 */

export const getDayForRouting = (str) => {
    let sections = str.split(" ");
    let section1 = sections[1];
    let dayStr = section1.slice(0, -1);
    let dayNumber = Number(dayStr);
    return dayNumber;
}


const DropDown = () => {
    let getDisplayDates = getAvailableDays(questions);
    const [question, setQuestion] = useState(1);

    const choosedate = (e) => {
        setQuestion(getDayForRouting(e.target.value));
    }

    return (
        <div className="dropdown">
            <select className="dropdown__dropdown" data-test="dropdown" onChange={choosedate}>
                {getDisplayDates}
            </select>
            <Link className="btn dropdown__button"  to={`/question/${question}`} data-test="submit-button">
                Go To Question
            </Link>
        </div>
    )

};

export default DropDown;