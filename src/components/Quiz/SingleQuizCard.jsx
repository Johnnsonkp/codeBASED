import './singleQuizCard.css';

import React, {useState} from 'react';

import { shuffleArray } from '../../helpers/utils';

const SingleQuizCard = ({ id, topic, subcategory, type, question, correct_answer, incorrect_answers}) => {
  const [solved, setSolved] = useState({
    status: false,
    backgroundColor: ''
  })

  const optionSelected = (option, correct_answer) => {
    option == correct_answer? 
      setSolved({status: true, backgroundColor: "#40C86A"}) : 
      setSolved({status: false, backgroundColor: "rgba(243, 90, 84, 1)"})
  }

  const DisplayOptions = ({optionSelected}) => {
    let options = []

    options.push(correct_answer)
    incorrect_answers.map((option) => options.push(option))
    shuffleArray(options)
    
    return options.map((option, index) => (
      solved.status == false?

        <div key={index} className="option" onClick={() => optionSelected(option, correct_answer)}>
          <input type="checkbox"  className="checkbox" />
          <label className="label" value={option}>{option}</label>
        </div>
         :
        <div disabled={true} key={index} className="option" onClick={() => optionSelected(option, correct_answer)}>
          <input disabled={true} type="checkbox"  className="checkbox" />
          <label disabled className="label" value={correct_answer}>{correct_answer}</label>
       </div>
    ))
  }

  return (
      <div 
        key={id}
        className="form-box"
        style={{backgroundColor: `${solved.backgroundColor}`}}
      >
        {/* <button style={{fontSize: '12px', float: 'left', display: 'block'}}>{topic}/ {subcategory}</button> */}
        <p className="header">{question || ""}</p>
        <div className="options">
          <DisplayOptions optionSelected={optionSelected}/>
        </div>
      </div>
  );
};

export default SingleQuizCard;
