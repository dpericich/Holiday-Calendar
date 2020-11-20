import React from 'react';
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


const DropDown = () => {
    let getDisplayDates = getAvailableDays(questions);

    return (
        <div className="dropdown">
            <select className="dropdown__dropdown" data-test="dropdown">
                {getDisplayDates}
            </select>
        </div>
    )

};

export default DropDown;