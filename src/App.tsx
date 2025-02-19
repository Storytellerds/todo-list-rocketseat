import styles from './App.module.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';


export function App() {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <NewTask />

      </main>
    </div>
  )
};