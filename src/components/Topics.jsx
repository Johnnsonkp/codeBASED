import React from 'react'

const Topicbutton = ({topicTitles, onClick, selected, setSelected}) => (
  topicTitles.map((title, index) => (
    <button 
      key={index}
      style={{
        margin: '5px', 
        marginTop: '0px',
        marginBottom: '2px',
        fontSize: '13px',
        border: selected == title && '1px solid rgb(80, 250, 123)',
        backgroundColor: selected == title && 'rgb(80, 250, 123)',
        color: selected == title && '#333',
        marginBottom: '40px'
      }}
      onClick={() => setSelected(title)}
    >{title}
    </button>
  ))
)

export default Topicbutton