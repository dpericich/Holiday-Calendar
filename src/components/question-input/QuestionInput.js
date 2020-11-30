import React,  {useState} from 'react';
import FailureStatus from '../question-statuses/FailureStatus';
import SuccessStatus from '../question-statuses/SuccessStatus';
import PropTypes from 'prop-types';

const QuestionInput = ({answerStatus, answer, id, updatedAnswerStatus, handleAnswerSubmit}) => {
    const [inputValue, setInputValue] = useState("");

    /**
 * @function answerCheck - cleans and then checks that input is correct. Calls updateAnswerStatus to update App state
 * @param {string} input - uncleaned 
 * @param {string or integer} answer - answer retrieved from json file
 * @return - does not return items. Calls updatedAnswerStatus with the question id and the boolean result
 */

 const answerCheck = (input, answer) => {
    let result;
    input = input.replace(/,/g, '');
    const numberInput = Number(input);
    if (numberInput) {
        result = (numberInput === answer);
    } else {
        let stringInput = input.toLowerCase();
        result = (stringInput === answer);
    }
    updatedAnswerStatus(id, result);
}

    /**
     * @function resetError - sets the state value to null if the answer is false so the incorrect answer prompt clears
     */
    const resetError = () => {
        updatedAnswerStatus(id, null)
    }

    if(answerStatus[id] === null) {
        return (
            <>
                <input type="text" className="question__input" placeholder="Enter Your Answer!" onChange={(e) => setInputValue(e.target.value)}/>
                <div className="btn question__submit" onClick={() => answerCheck(inputValue, answer)}>Check your answer</div>
            </>
        )
    } else if (answerStatus[id] === false) {
            return (
                <>
                    <FailureStatus />
                    <input type="text" 
                        className="question__input" 
                        placeholder="Enter Your Answer!" 
                        onClick={() => resetError()} 
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="btn question__submit" onClick={() => answerCheck(inputValue, answer)}>Check your answer</div>
                </>
            )
    } else if (answerStatus[id] === true) {
        return (
            <>
                <SuccessStatus />
            </>
        )
    }
};

export default QuestionInput;

QuestionInput.propTypes = {
    answerStatus : PropTypes.boolean,

}