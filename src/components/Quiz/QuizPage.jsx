import './quizPage.css'

import React, { useCallback, useEffect, useState } from 'react'
import { shuffleArray, shuffleObjOfArrays } from '../../helpers/utils'

import CategoryContainer from './CategoryContainer'
import Divider from '../Common/Divider'
import DropDownSelect from './DropDownSelect'
import Footer from '../Common/Footer'
import SingleQuizCard from './SingleQuizCard'
import SmallQuizCardTextEditor from './SmallQuizCardTextEditor'
import Topicbutton from '../TopicsCarousel/Topics'

function QuizPage() {
  const [quizData, setQuizData] = useState()
  const [showQuiz, setShowQuiz] = useState()
  const [selectedSubcategory, setSelectedSubcategory] = useState()
  const [selectedCategory, setSelectedCategory] = useState()

  const [cLangData, setClangData] = useState()
  const [topics, setTopics] = useState()
  const [subTopics, setSubtopics] = useState()
  const [categories, setCategories] = useState()
  const [subcategories, setSubCategories] = useState()

  const serverURL = import.meta.env.VITE_APP_PROD_SERVER_URL 

  const getQuizCategories = async () => {
    try{
      const response = await fetch(`${serverURL}/api/quiz-items/categories`, {
        method: 'GET',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*", 
        },
      })
      const data = await response.json();
      return data
      
    } catch (error){
      console.log(error)
    }
  }

  const loadDefaultQuizes = async () => {
    try{
      const response = await fetch(`${serverURL}/api/quiz-items/quizes`, {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*", 
        },
        body: JSON.stringify({ category: "Python"}),
      })
      const data = await response.json();
      return data
      
    } catch (error){
      console.log(error)
    }
  }

  const getSelectedCategory = async (selectedCategory) => {
    try{
      const response = await fetch(`${serverURL}/api/quiz-items/selected-quiz`, {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*", 
        },
        body: JSON.stringify({ category: selectedCategory}),
      })
      const data = await response.json();
      return data
      
    } catch (error){
      console.log(error)
    }
  }

  const getCategory= (title) => {
    setSelectedCategory(title)

    getSelectedCategory(title)
      .then((data) => {
        data.filter((arr) => shuffleArray(arr))
        setQuizData(data)
      })
  }


  useEffect(() => {
    let isMounted = true;

    getQuizCategories()
    .then((data) => {
      setCategories(data)
      setSelectedCategory(data[1])
    })

    loadDefaultQuizes().then((data) => {
      data.filter((arr) => shuffleArray(arr))
      setQuizData(data)
    })

    return () => {
      isMounted = false; // Cleanup function to avoid memory leaks
    };
  }, [])

  useEffect(() => {
    let isMounted = true;

    if (quizData && isMounted){
      let subs = []
      for(let i = 0; i < quizData.length; i++){
        subs.push(quizData[i][0].subcategory)
      }
      setSubCategories(subs)
      setSelectedSubcategory(subs[0])
    }
    
    return () => {
      isMounted = false;
    };
  }, [quizData])

  const Timeline = ({quizData}) => {

    const timelineStyles = {
      lineContainer: {
          display: 'flex',
          // flexDirection: 'column',
          padding: '0.5rem',
          margin: 'auto',
          maxWidth: '100%',
          backgroundColor: '1px solid red',
          // width: '900px'
      },
      eventWrapper: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
      },
      verticalLine: {
          margin: 'auto',
          width: '9vw',
          height: '3px',
          backgroundColor: '#818cf8',
          borderRadius: '2px',
      },
      circle: {
          position: 'absolute',
          width: '14px',
          height: '14px',
          backgroundColor: 'white',
          border: '4px solid #4f46e5',
          borderRadius: '50%',
          top: '50%',
          transform: 'translateY(-50%)',
      }
    };


    return (
      <div style={timelineStyles.lineContainer}>
        {quizData && quizData.map((items, index) => {
          return items.map((row, index) => {
            return row.subcategory == selectedSubcategory && index < 10 ?
              <div key={index} style={timelineStyles.eventWrapper}>
                <div style={timelineStyles.verticalLine}></div>
                <div style={timelineStyles.circle}>{index}</div>
              </div> : ''
          })    
        })}
      </div>
    );
 }

  return (
    <div style={{}}>
      <Divider />
      <div style={{display: 'flex', marginBottom: '30px'}}>
        <DropDownSelect 
          categories={categories} 
          selectedCategory={selectedCategory} 
          getCategory={getCategory}
        />
        <CategoryContainer 
          subcategories={subcategories} 
          selectedSubcategory={selectedSubcategory} 
          getCategory={getCategory}
          setSelectedSubcategory={setSelectedSubcategory}
        />
      </div>
      {/* <Timeline quizData={quizData}/> */}
        <div className={'card-container'}>
          {quizData && quizData.map((item, index) => { 
            return item.map((row, index) => {
              return row.subcategory == selectedSubcategory && index < 10 ?
                
                row.type == "text-editor"?
                <SmallQuizCardTextEditor
                  key={index}
                  id={row.id}
                  topic={row.topic}
                  subcategory={row.subcategory}
                  type={row.type}
                  question={row.question}
                  correct_answer={row.correct_answer}
                  incorrect_answers={row.incorrect_answers}
                />:
                <SingleQuizCard
                  key={index}
                  id={row.id}
                  topic={row.topic}
                  subcategory={row.subcategory}
                  type={row.type}
                  question={row.question}
                  correct_answer={row.correct_answer}
                  incorrect_answers={row.incorrect_answers}
                /> : "" 
            }
          )
          })}
        </div>

      <Footer />
    </div>
  )
}

export default QuizPage