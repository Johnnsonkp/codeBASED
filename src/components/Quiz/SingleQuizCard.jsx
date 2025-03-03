import './singleQuizCard.css';

import React from 'react';

const SingleQuizCard = ({ id, topic, subcategory, type, question, correct_answer, incorrect_answers}) => {
  return (
    <div className="container" key={id}>
      <div className="form-box">
        <p className="header">{question || ""}</p>
        <div className="options">
          <div className="option">
            <input type="checkbox" id="tennis" className="checkbox" />
            <label htmlFor="tennis" className="label">{incorrect_answers[1]}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="rugby" className="checkbox" />
            <label htmlFor="rugby" className="label">{incorrect_answers[0]}</label>
          </div>
          <div className="option">
            <input type="checkbox" id="golf" className="checkbox" />
            <label htmlFor="golf" className="label">{correct_answer}</label>
          </div>
        </div>
        <div className="submit-container">
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SingleQuizCard;
