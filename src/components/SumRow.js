import React from 'react'

const SumRow = ({ board }) => (
  <tr>
    <td>
      <strong>sum</strong>
    </td>
    {
      board.players.map(player => {
        const key = `sum-${player.id}`
        const allScores = []
          .concat
          .apply([], board
            .rounds
            .map(round => round.scores))
        const sum = allScores
          .filter(score => score.player === player.id)
          .map(score => score.score)
          .reduce((sum, current) => sum + current, 0)
        return(
          <td key={key}><strong>{sum}</strong></td>
        )   
      })
    }
  </tr>
)

export default SumRow
