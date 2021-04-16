import { useState , useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

function App() {

    const [showAddTask,setShowAddTask] = useState (false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
 
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
    },[])

  const fetchTasks = async () => {
    const res = await fetch(`/api/tasks`)
    const data = await res.json()
    console.log(typeof data);
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`/api/${id}`)
    const data = await res.json()

    return data
  }

//add task
  const addTask = async (task) => {

    const res = await fetch(`/api/tasks`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task) // body data type must match "Content-Type" header
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }
  //Delete Task

  const deleteTask = async (id) => {
    const res = await fetch(`/api/tasks/${id}`,{
      method: 'DELETE'
    })
    console.log(res);
    setTasks(tasks.filter((task) => task._id !== id))

  }

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}
    const res = await fetch(`/api/tasks/${id}`,{
      method:'PUT',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(updTask)
    })
  
  const data = await res.json()

  setTasks(tasks.map((task) => task.id === id ? {...task, reminder:!data.reminder}: task ))
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd = {()=> (setShowAddTask(!showAddTask))} showAdd = {showAddTask} title = 'Task Tracker'/>

        <Route path = '/' exact render = {(props) => (
          <>
            {showAddTask && <AddTask onAdd = {addTask}/>}
            { 
              tasks.length > 0 ? (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/> ) : ('No Tasks to Show')
            }
          </>
        )} />
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
