import React, { useEffect } from 'react'

const BoardControl = ({ data, setCurrentBoard }) => {
  useEffect(() => {
    setCurrentBoard(0)
    console.log("data", data)
  }, [])

  if (typeof data.map !== 'function') {
    return (
      <p>Loading board selector...</p>
    )
  } else {
    return (
      <>
        <select onChange={event => {
          setCurrentBoard(event.target.value)
        }}
        >
        {
            data.map((board, i ) => (
              <option key={`board-selector-${i}`} value={i}>{board.id}</option>
            ))
        }
        </select>
      </>
    )
  }
}

export default BoardControl
