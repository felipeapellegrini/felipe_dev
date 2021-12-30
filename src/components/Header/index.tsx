import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

interface ProfileProps {
  avatar_url: string;
}

export function Header() {
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  useEffect(()=> {
    fetch('https://api.github.com/users/felipeapellegrini')
      .then(response => response.json())
      .then(data => setProfile(data))
  }, []);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img
          src="/images/logo.svg"
          alt="header_img"
          />
        </div>
        <div className={styles.nav}>
          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a className={styles.active}>Home</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/portfolio">
              <a>Portfolio</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/repositorios">
              <a>Repositórios</a>
            </ActiveLink>
            <ActiveLink activeClassName={styles.active} href="/contato">
              <a>Contato</a>
            </ActiveLink>
          </nav>
        </div>
        <div className={styles.profile}>
          <img
            src={profile.avatar_url}
            alt="github_profile"
            />
        </div>
      </div>
    </header>
  );
}
