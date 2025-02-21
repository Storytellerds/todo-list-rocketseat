import { PlusCircle } from '@phosphor-icons/react' 
import styles from './NewTask.module.css'
import { Task } from './Task'
import { FormEvent, InvalidEvent, useState } from 'react'

interface TaskProps {
  text: string;
  completed: boolean;
  id: number;
}

export function NewTask() {

  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskInput, setTaskInput] = useState('')
  const [nextId, setNextId] = useState(1)

  function handleCreateNewTask(e: FormEvent){
    e.preventDefault();

    if (taskInput.trim() === '') return

    const newTask = {text: taskInput, completed: false, id: nextId}

    setTasks([...tasks, newTask]);

    setTaskInput('');

    setNextId(nextId + 1);
  }

  function handleUpdateCheckbox(id: number){
    const updateTasks = tasks.map(t =>
      t.id === id ? {...t, completed: !t.completed} : t
    )
    setTasks(updateTasks)
  }

  function handleDeleteTask(taskToDelete: number) {
    const filteredTasks = tasks.filter(t => t.id!== taskToDelete)
    setTasks(filteredTasks)
  }

  const completedTasks = tasks.filter(t => t.completed).length

  return(
    <div  className={styles.container}>      
      <form onSubmit={handleCreateNewTask} className={styles.content}>
        <input 
          type="text" 
          placeholder="Adicionar nova tarefa..." 
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          
          />
        <button type='submit'>
          Criar
          <PlusCircle size={16} weight='bold'/>
        </button> 
      </form>
   
      <header className={styles.containerHeader}>
        <div className={styles.headerLeft}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.headerRight}>
          <p>Concluídas</p>
          <span>{completedTasks} de {tasks.length}</span>
        </div>
      </header>

      {tasks.map((task) => {
        return(
          <Task 
            key={task.id}
            task={task}
            onChangeCompleted={handleUpdateCheckbox}
            onDeleteTask={handleDeleteTask}
          />
        )
      })}
      
    </div>
  )
}
