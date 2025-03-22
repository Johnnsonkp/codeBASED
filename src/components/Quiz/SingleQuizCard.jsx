import './singleQuizCard.css';

import React, {useState} from 'react';

import { shuffleArray } from '../../helpers/utils';

const SingleQuizCard = ({ id, topic, subcategory, type, question, correct_answer, incorrect_answers}) => {
  const [solved, setSolved] = useState(false)

  const optionSelected = (option, correct_answer) => {
    option == correct_answer? setSolved(true) : setSolved(false)
  }

  const DisplayOptions = ({optionSelected}) => {
    let options = []

    options.push(correct_answer)
    incorrect_answers.map((option) => options.push(option))
    shuffleArray(options)
    
    return options.map((option, index) => (
      <div key={index} className="option" onClick={() => optionSelected(option, correct_answer)}>
        <input type="checkbox"  className="checkbox" />
        <label className="label" value={option}>{option}</label>
      </div>
    ))
  }

  const handleSubmit = (e) => {
    console.log(e.target)
  }

  return (
      <div 
        key={id}
        className="form-box"
        style={{backgroundColor: `${solved? "#40C86A" : "rgba(217, 83, 79, 0.3)"}`}}
      >
        <p className="header">{question || ""}</p>
        <div className="options">
          <DisplayOptions optionSelected={optionSelected}/>
        </div>
      </div>
  );
};

export default SingleQuizCard;
