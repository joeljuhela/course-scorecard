import React, { useState } from 'react'

// This section needs to be split into smaller components
// the code is also messy

const ControlSection = ({ data, setData, boardId }) => {
  const board = data[boardId]
  const [ newPlayer, setNewPlayer ] = useState('')
  const [ newScore, setNewScore ] = useState(0)

  const addPlayer = () => {
    // let id be one bigger than current max id 
    const playerId = Math.max(
      ...board.players.map(player => player.id)
    ) + 1
    const playerObject = {
      id: playerId,
      name: newPlayer,
    }
    const dataCopy = Object.assign({}, data)
    dataCopy[boardId].players = dataCopy[boardId].players.concat(playerObject)
    setData(dataCopy)
    setNewPlayer('')
    document.getElementById("new-player-input").value = ''
  }

  const addRound = () => {
    const roundInput = document.getElementById('new-round-input')
    const roundId = roundInput.value
    const roundObject = {
      id: roundId,
      scores: [],
    }
    const dataCopy = Object.assign({}, data)
    dataCopy[boardId].rounds = dataCopy[boardId].rounds.concat(roundObject)
    setData(dataCopy)
    roundInput.value = ''
  }

  const addScore = () => {
    const dataCopy = Object.assign({}, data)
    const currentPlayer = document.getElementById('player-select').value
    const selectedRound = document.getElementById('round-select').value
    const scoreObject = {
      player: Number.parseInt(currentPlayer),
      score: Number.parseInt(newScore),
    } 
    dataCopy[boardId]
      .rounds
      .filter(round => round.id === selectedRound)[0]
      .scores =
      dataCopy[boardId]
      .rounds
      .filter(round => round.id === selectedRound)[0]
      .scores.concat(scoreObject)
    setData(dataCopy)
    setNewScore(0)
    console.log(data)
    document.getElementById('new-score-input').value = 0
  }

  return (
    <>
      <select id="player-select">
      {
        board.players.map(player =>
          <option
            key={`option-player-${player.id}`}
            value={player.id}
          >
            {player.name}
          </option>
        )
      }
      </select>
      <select id="round-select">
      {
        board.rounds.map(round =>
          <option
            key={`option-round-${round.id}`}
            value={round.id}
          >
            {round.id}
          </option>
        ).reverse()
      }
      </select>
      <input
        id="new-score-input"
        type="number"
        onChange={event =>
          setNewScore(event.target.value)
        }
      />
      <button onClick={addScore}>Upload score</button>
      <br />
      New round:
      <input type="text" id="new-round-input" />
      <button onClick={addRound}>Add round</button>
      <br />
      New player:
      <input
        id="new-player-input"
        type="text"
        onChange={event =>
          setNewPlayer(event.target.value)}
      />
      <button onClick={addPlayer}>Add Player</button>
    </>
  )
}

export default ControlSection
