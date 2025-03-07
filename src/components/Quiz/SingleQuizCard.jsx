import './singleQuizCard.css';

import React from 'react';

const SingleQuizCard = ({ id, topic, subcategory, type, question, correct_answer, incorrect_answers}) => {

  const DisplayOptions = () => {
    let options = []

    function shuffleArray(array) {
      for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
    }
    options.push(correct_answer)
    incorrect_answers.map((option) => options.push(option))
    shuffleArray(options)
    
    return options.map((option, index) => (
      <div key={index} className="option" onClick={() => option == correct_answer? alert("yes") : ''}>
        <input type="checkbox"  className="checkbox" />
        <label className="label" value={option}>{option}</label>
      </div>
    ))
  }

  const handleSubmit = (e) => {
    console.log(e.target)
  }

  return (
    <div className="container" key={id}>
      <div className="form-box">
        <p className="header">{question || ""}</p>
        <div className="options">
          <DisplayOptions />
        </div>
        <div className="submit-container">
          <button className="submit-button" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SingleQuizCard;
