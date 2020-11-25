import React from 'react';
import DropDown from '../dropdown/DropDown';
import Translate from '../translate/Translate';
import {translate, questionProgress} from './translate';

const Home = ({answerStatus}) => {
    console.log(answerStatus)
    const questionStatusArray = questionProgress(answerStatus);
    console.log(questionStatusArray)
    return(
        <div className="home">
            <DropDown />
            <h2 className="home__title">Answer the daily questions to unlock how people around the world say "Happy Holidays!"</h2>
            {translate.map((item, elem) => (
                <Translate key={item.lang} translationItems={item} itemsAnswered={questionStatusArray[elem]}/>
            ))}
        </div>
    )
}

export default Home;