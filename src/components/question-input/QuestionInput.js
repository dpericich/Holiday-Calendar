import React,  {useState} from 'react';
import FailureStatus from '../question-statuses/FailureStatus';
import SuccessStatus from '../question-statuses/SuccessStatus';


const QuestionInput = ({answerStatus, answer, id, updatedAnswerStatus, handleAnswerSubmit}) => {
    const [inputValue, setInputValue] = useState("");

    /**
     * @function resetError - sets the state value to null if the answer is false so the incorrect answer prompt clears
     */
    const resetError = () => {
        updatedAnswerStatus(id, null)
    }
    
    const answerCheck = (input, answer) => {
        let result;
        const numberInput = Number(input);
        console.log()
        if (numberInput) {
            result = (numberInput === answer);
        } else {
            let stringInput = input.toLowerCase();
            result = (stringInput === answer);
        }
        updatedAnswerStatus(id, result);
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