import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
  task: {
    text: string,
    completed: boolean,
    id: number,
  };
  onChangeCompleted: (id: number) => void;
}

export function Task({ task, onChangeCompleted }: TaskProps) {
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
          <button><Trash width={20} height={20}/></button>
        </li>
      </ul>
    </main>   
  )
}