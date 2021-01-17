import { useEffect, useState } from 'react';
import courseService from './services/courses.js';
import './App.css';

const Round = ({ round, playerCount }) => {
  return (
    <span>{round.name}</span>
  )
}

const CourseScorecard = ({ course }) => {
  const playerCount = course.players.length

  return (
    <div>
      <h2>{course.code} - {course.name}</h2>
      <div className="scoreboard" style={{gridTemplateColumns: `repeat(${playerCount + 1}, 1fr)`}}>
        <span>Round name</span>
        {course.players.map(player => <span>{player.name}</span>)}
        { course.rounds.map(round => <Round round={round} playerCount={playerCount} key={round.name} />) }
      </div>
    </div>
  )
}

const App = () => {
  const [ courses, setCourses ] = useState([])

  useEffect(() => {
    courseService.getAll().then(initialCourses => setCourses(initialCourses));
  }, [])

  return (
    <div className="App">
      { courses.map(course => <CourseScorecard course={course} key={course.code} />) }
    </div>
  );
}

export default App;
