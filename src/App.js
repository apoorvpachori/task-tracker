import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
function App() {

    const [tasks, setTasks] = useState([
      {
          id:1,
          text: 'Doctors Appointment',
          day: 'Feb 5th',
          reminder: true,
      },
      {
          id:2,
          text: 'Meeting',
          day: 'Feb 6th',
          reminder: true,
      },
      {
          id:3,
          text: 'Food Shopping',
          day: 'Feb 7th',
          reminder: false,
      },
  ])

  return (
    <div className="container">
      <Header title = 'Task Tracker'/>
      <Tasks tasks = {tasks}/>
    </div>
  );
}

export default App;
