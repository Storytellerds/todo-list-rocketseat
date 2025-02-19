import styles from './Header.module.css';
import LogoIcon from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={LogoIcon} alt="logo" />
      <div>
        <span className={styles.blue}>to</span>
        <span className={styles.purple}>do</span>
      </div>
    </header>
  );
}
