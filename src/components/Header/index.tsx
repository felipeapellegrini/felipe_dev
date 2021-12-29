import { SignInButton } from '../SignInButton';
import Image from 'next/image'
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
        src="/images/logo.svg"
        alt="header_img"
        width={260}
        height={50}/>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
