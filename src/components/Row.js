import React from 'react'

const Row = ({ scores, name, players }) => {
  return (
    <tr>
      <td>
        <strong>{name}</strong> 
      </td>
      {
        players.map(player => {
          const filteredScores = scores.filter(score => score.player === player.id)
          const score = filteredScores.length === 0 ?
            ''
          :
            filteredScores[0].score
          const key = `${name}-td-${player.id}`
          return (
            <td key={key}>
              {score}
            </td>
          )
        })
      }
    </tr>
  )
}

export default Row
