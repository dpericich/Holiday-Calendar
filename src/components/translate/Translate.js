import React from 'react';
import PropTypes from 'prop-types';
import lock from '../../images/lock.png'

const Translate = ({translationItems, itemsAnswered}) => {
    const audioLink = new Audio(require(`../../audio/${translationItems.audio}.mp3`).default);
    let item = itemsAnswered;
    if (item !== 5) {
        return(
            <div className="translate">
                <p className="translate__text">
                    {`${itemsAnswered}`} of 5 Completed {translationItems.date}
                </p>
                <div className="translate__container">
                    <img src={lock} alt="private content " className="translate__container--lock "/>
                </div>
            </div>
        )
    } else {
        return(
            <div className="translate">
                <p className="translate__text">
                    {`${itemsAnswered}`} of 5 Completed {translationItems.date}
                </p>
                <div className="translate__container">
                    <h4 className="translate__title">{translationItems.lang}</h4>
                    <div className="translate__translate-container">
                        <div className="translate__foreign-language">{translationItems.happy}</div>
                        <div className="btn translate__button" onClick={() => audioLink.play()}>Play Translation / &#9658;
                        </div>
                    </div>
                    <img src={require(`../../images/${translationItems.img}.png`).default} alt="spanish flag" className="translate__country"/>
                </div>
            </div>
        )
    }
};

export default Translate;

Translate.propTypes = {
    translationItems : PropTypes.array.isRequired,
}