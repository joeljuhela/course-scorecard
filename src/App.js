import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Scoreboard from './components/Scoreboard'
import './App.css'

function App() {
  const [ data, setData ] = useState(null)
  const [ currentBoard, setCurrentBoard ] = useState(0)
  useEffect(() => {
    axios
      .get('http://localhost:3001/boards') 
      .then((response) => {
        setData(response.data)
      }) 
  }, [])

  if (data === null) {
    return(
      <p>Loading data...</p>
    )
  } else {
    return(
      <Scoreboard
        boardId={currentBoard}
        data={data}
        setData={setData}
      />
    )
  }
}

export default App
