import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import courseService from './services/courses.js';
import playerService from './services/players.js';


const CourseScorecard = ({ course }) => {
  return (
    <div>
      <h2>{course.code} - {course.name}</h2>
    </div>
  )
}

const App = () => {
  const [ courses, setCourses ] = useState([])
  const [ players, setPlayers ] = useState([])

  useEffect(() => {
    console.log('fired')
    courseService.getAll().then(initialCourses => setCourses(initialCourses));
    playerService.getAll().then(initialPlayers => setPlayers(initialPlayers));
  }, [])

  return (
    <div className="App">
      { courses.map(course => <CourseScorecard course={course} key={course.code} />) }
    </div>
  );
}

export default App;
