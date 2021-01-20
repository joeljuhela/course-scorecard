import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Scoreboard from './components/Scoreboard'
import BoardControl from './components/BoardControl'
import './App.css'

function App() {
  const [ data, setData ] = useState(null)
  const [ currentBoard, setCurrentBoard ] = useState(0)
  const apiBase = 'http://localhost:3001'
  const getData = () => {
    axios
      .get(`${apiBase}/boards`) 
      .then(response => {
        setData(response.data)
      }) 
  }

  const postData = () => {
    axios
      .put(`${apiBase}/boards/${data[currentBoard].id}`, data[currentBoard])
  }

  useEffect(() => {
    getData()
    const getTimeout = setInterval(getData, 5000)
    return () => clearInterval(getTimeout)
  }, [])

  if (data === null) {
    return(
      <p>Loading data...</p>
    )
  } else {
    return(
      <>
        <BoardControl 
          data={data} 
          setCurrentBoard={setCurrentBoard}
        />
        <Scoreboard
          boardId={currentBoard}
          data={data}
          setData={setData}
          postData={postData}
        />
      </>
    )
  }
}

export default App
