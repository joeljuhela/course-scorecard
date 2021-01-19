import React from 'react'
import Row from './Row'

const ScoreRows = ({ board }) => (
  <>
  {
    board.rounds.map(round =>
      <Row
        key={round.id}
        name={round.id}
        scores={round.scores}
        players={board.players}
      />
    )
  }
  </>
)

export default ScoreRows
