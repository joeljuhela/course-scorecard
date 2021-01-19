import React from 'react'
import ScoreRows from './ScoreRows'
import SumRow from './SumRow'
import PlayerRow from './PlayerRow'
import ControlSection from './ControlSection'

const Scoreboard = ({ boardId, data, setData }) => {
  const board = data[boardId]
  return (
    <>
      <h3>{board.id} – {board.name}</h3>
      <table>
        <tbody>
          <PlayerRow board={board} />
          <ScoreRows board={board} />
          <SumRow board={board} />
        </tbody>            
      </table>
      <ControlSection
        boardId={boardId}
        data={data}
        setData={setData}
      />
    </>  
  )
}

export default Scoreboard
