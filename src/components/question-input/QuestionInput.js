import React from 'react';
import PropTypes from 'prop-types';
import FailureStatus from '../question-statuses/FailureStatus';
import SuccessStatus from '../question-statuses/SuccessStatus';

const QuestionInput = ({questionStatus}) => {
    const status = questionStatus;
    if(status === null) {
        return (
            <>
                <input type="text" className="question__input" placeholder="Enter Your Answer!"/>
                <div className="btn question__submit">Check your answer</div>
            </>
        )
    } else if (status === false) {
            return (
                <>
                    <FailureStatus />
                    <input type="text" className="question__input" placeholder="Enter Your Answer!"/>
                    <div className="btn question__submit">Check your answer</div>
                </>
            )
    } else if (status === true) {
        return (
            <>
                <SuccessStatus />
            </>
        )
    }
};

export default QuestionInput;

QuestionInput.propTypes = {
    questionStatus : PropTypes.bool.isRequired
}