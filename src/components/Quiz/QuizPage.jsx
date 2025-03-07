import React, { useEffect, useState } from 'react'

import Divider from '../Common/Divider'
import Footer from '../Common/Footer'
import SingleQuizCard from './SingleQuizCard'
import Topicbutton from '../TopicsCarousel/Topics'

function QuizPage() {
  const [quizData, setQuizData] = useState()
  const [cLangData, setClangData] = useState()
  const [topics, setTopics] = useState()
  const [subTopics, setSubtopics] = useState()

  const getData = async () => {
    try {
      const response = await fetch('/testAPI/PythonData.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setQuizData(data);
    } catch (error) {
      console.log('There was an error', error);
    }
  }

  const getCLangData = async () => {
    try {
      const response = await fetch('/testAPI/CLangData.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setClangData(data);
    } catch (error) {
      console.log('There was an error', error);
    }
  }

  

  useEffect(() => {
    let isMounted = true;
    
    if (!quizData && !cLangData && isMounted){
      console.log("fetchData")
      getData()
      getCLangData()
    }

    if (quizData && cLangData && topics === undefined && isMounted){
      const topics = []
      const subTopics = []

      topics.push(quizData[0].topic)
      topics.push(cLangData[0].topic)

      quizData.map((quiz) => subTopics.push(quiz.subcategory))
      cLangData.map((quiz) => subTopics.push(quiz.subcategory))

      setTopics(topics)
      setSubtopics(subTopics)
    }

    return () => {
      isMounted = false; // Cleanup function to avoid memory leaks
    };
  }, [quizData, cLangData])

  return (
    <div style={{}}>
      <Divider />
      {/* {topics && topics.map((title, index) => (<button style={{margin: '5px', padding: '5px'}} key={index}>{title}</button>))} */}

      <select>
        {topics && topics.map((title, index) => (<option style={{margin: '5px', padding: '5px'}} key={index}>{title}</option>))}
      </select>

      {subTopics && subTopics.map((title, index) => (<button style={{margin: '5px', padding: '5px'}} key={index}>{title}</button>))}
      
        <div style={{display: 'flex', flexWrap: 'wrap', minHeight: '90vh', marginBottom: '80px'}}>
          {quizData && quizData.map((item, index) => (
            <SingleQuizCard
              key={index}
              id={item.id}
              topic={item.topic}
              subcategory={item.subcategory}
              type={item.type}
              question={item.question}
              correct_answer={item.correct_answer}
              incorrect_answers={item.incorrect_answers}
            />
          ))}
        </div>

      <Footer />
    </div>
  )
}

export default QuizPage