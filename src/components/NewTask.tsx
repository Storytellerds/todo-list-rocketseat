import { PlusCircle } from '@phosphor-icons/react' 
import styles from './NewTask.module.css'
import { Task } from './Task'
import { FormEvent, useState } from 'react'

export function NewTask() {

  const [tasks, setTasks] = useState<string[]>([])
  const [taskInput, setTaskInput] = useState('')

  function handleCreateNewTask(e: FormEvent){
    e.preventDefault();

    if (taskInput.trim() === '') return

    setTasks([...tasks, taskInput]);

    setTaskInput('');
  }

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
          <span>0 de {tasks.length}</span>
        </div>
      </header>

      {tasks.map((task, index) => {
        return(
          <Task 
            key={index}
            task={task}
          />
        )
      })}
      
    </div>
  )
}
