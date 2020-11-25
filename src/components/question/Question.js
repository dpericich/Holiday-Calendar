import React from 'react';
import { useParams } from 'react-router-dom';
import DropDown from '../dropdown/DropDown';
import {questions} from '../../QuestionFile';
import QuestionInput from '../question-input/QuestionInput';

const Question = ({answerStatus, updatedAnswerStatus, handleAnswerSubmit}) => {
    let {id} = useParams();
    const todaysQuestionInformation  = questions.filter(information => information.day == id)[0];
    console.log(todaysQuestionInformation);
    
    return(
        <div className="question">
            <DropDown />
            <div className="question__container">
                <h2 className="question__title">Question {id}</h2>
                <p className="question__prompt">{todaysQuestionInformation.question}</p>
                <QuestionInput 
                    answerStatus={answerStatus} 
                    answer={todaysQuestionInformation.answer} 
                    id={id} 
                    updatedAnswerStatus={updatedAnswerStatus}
                    handleAnswerSubmit={handleAnswerSubmit}
                />
            </div>
        </div>
    )
}

export default Question;