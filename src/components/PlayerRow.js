import React from 'react'

const PlayerRow = ({ board }) => (
  <tr>
    <td></td>
    {
      board.players.map(player => 
        <td key={player.id}>
          <strong>{player.name}</strong>
        </td>
      )
    } 
  </tr>
)

export default PlayerRow
