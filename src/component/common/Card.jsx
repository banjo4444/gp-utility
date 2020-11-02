import React from 'react';

import './card.scss';

const Card = ({ title, children }) => {
    return (
        <div className="container col-10 col-md-6 card__base mt-5 mb-5 pl-0 pr-0">
            <div className="card__header text-center pt-3 pb-3">
                <h3>{ title }</h3>
            </div>
            <div className="card__body">
                { children }
            </div>
        </div>
    );
};

export default Card;
