import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

interface TaskProps {
  task: string;
}

export function Task({ task }: TaskProps) {
  return(   
    <main className={styles.mainContent}>
      <ul>
        <li>
          <div className={styles.list}>
            <input type="checkbox" id="task1" name="task1" />
            <label for="task1">{task}</label>            
          </div>
          <button><Trash width={20} height={20}/></button>
        </li>
      </ul>
    </main>   
  )
}