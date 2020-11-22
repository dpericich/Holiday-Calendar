import React from 'react';

const FailureStatus = () => {
    return (
        <div className="failure">
            <h4 className="failure__title">Incorrect Answer</h4>
            <p className="failure__text">That's not quite right... Reread the question and try again!</p>
        </div>
    )
};

export default FailureStatus;