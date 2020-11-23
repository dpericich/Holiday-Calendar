import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import DropDown from '../dropdown/DropDown';
import {questions} from '../../QuestionFile';
import QuestionInput from '../question-input/QuestionInput';

// export const statusUpdate = () => {
//     const question = true;
//     if (question) {
//         setStatus()
//     }
    
// }

const Question = () => {
    const [status, setStatus] = useState(true);
    let {id} = useParams();
    console.log(id)
    const todaysQuestionInformation  = questions.filter(information => information.day == id)[0];
    console.log(todaysQuestionInformation);
    
    return(
        <div className="question">
            <DropDown />
            <div className="question__container">
                <h2 className="question__title">Question {id}</h2>
                <p className="question__prompt">{todaysQuestionInformation.question}</p>
                <QuestionInput questionStatus={status}/>
            </div>
        </div>
    )
}

export default Question;