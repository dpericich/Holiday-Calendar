import React from 'react';

const QandA = () => {
    return(
        <div className="qa">
            <h2 className="qa__title">Frequent Questions and Answers</h2>
            <p className="qa__text"><span className="qa__text--question">Question: </span> Does my information get stored on a server?</p>
            <p className="qa__text"><span className="qa__text--answer">Answer: </span>No, this app stores all information in localStorage so your information is not stored on a server. Everything is stored in your browser.</p>
            <p className="qa__text"><span className="qa__text--question">Question: </span>If I did some of the questions on my phone, why is the progress not showing up on my computer?</p>
            <p className="qa__text"><span className="qa__text--answer">Answer: </span>This app uses localStorage so the progress will only be held by a single device. localStorage is specific to a single device, so please only do these questions on one computer or tablet.</p>
            <p className="qa__text"><span className="qa__text--question">Question: </span>How do I get credit for the questions I do?</p>
            <p className="qa__text"><span className="qa__text--answer">Answer: </span>Credit is incremental and will only be recorded once a full 5 question section is completed. Once a 5 question seciton is completed, you will be prompted to enter your name. Once you complete the prompt, an email will be sent to your teach for credit.</p>
            <p className="qa__text"><span className="qa__text--question">Question: </span>I believe I got a question right, but it won't give me credit. What should I do?</p>
            <p className="qa__text"><span className="qa__text--answer">Answer: </span>All questions were created and reviewed by your teacher. Please review any question issues with them.</p>

        </div>
    )

};

export default QandA;