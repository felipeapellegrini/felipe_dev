import Image from 'next/image'
import { useEffect, useState } from 'react';
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

  console.log(profile);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
        src="/images/logo.svg"
        alt="header_img"
        width={150}
        height={50}/>
        <nav>
          <a className={styles.active}>Home</a>
          <a>Portfolio</a>
          <a>Repositórios</a>
          <a>Contato</a>
        </nav>
        <img
          src={profile.avatar_url}
          alt="github_profile"
          className={styles.profile}/>
      </div>
    </header>
  );
}
