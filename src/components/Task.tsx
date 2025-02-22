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
      <li>
        <div className={styles.list}>
          <input 
            type="checkbox" 
            id={`${task.id}`} 
            checked={task.completed}
            onChange={() => onChangeCompleted(task.id)}
            aria-label={task.text}
          />
          <label htmlFor={`${task.id}`}>{task.text}</label>            
        </div>
        <button 
          onClick={handleDeleteTask} 
          title='Deletar Atividade'
          aria-label={`Deletar a atividade ${task.text}`}
        >
          <Trash width={20} height={20}/>
        </button>
      </li>
    </main>   
  )
}