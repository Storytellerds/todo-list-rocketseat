import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
  task: {
    text: string,
    completed: boolean,
    id: number,
  };
  onChangeCompleted: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onChangeCompleted, onDeleteTask }: TaskProps) {

  const handleDeleteTask = () => {
    onDeleteTask(task.id)
  }
  return(   
    <main className={styles.mainContent}>
      <ul>
        <li>
          <div className={styles.list}>
            <input 
              type="checkbox" 
              id={`${task.id}`} 
              checked={task.completed}
              onChange={() => onChangeCompleted(task.id)}
            />
            <label htmlFor="task1">{task.text}</label>            
          </div>
          <button onClick={handleDeleteTask} title='Deletar Atividade'><Trash width={20} height={20}/></button>
        </li>
      </ul>
    </main>   
  )
}