import styles from './index.module.css';
import { IoAccessibility } from 'react-icons/io5';
import { MdLaptopChromebook } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

export const Aside = () => {
  const pageReload = () => {
    location.reload();
  };

  return (
    <aside className={styles.aside}>
      <a href="/" className={styles.homeLink} onClick={pageReload} aria-label="リロード">
        <div className={styles.titleWrapper}>
          <p className={styles.position}>Frontend Engineer</p>
          <p className={styles.name}>Shunsuke Fujinawa</p>
        </div>
      </a>

      <div className={styles.navWrapper}>
        <a href="#about" className={styles.navLink}>
          <button type="button" className={styles.navItem}>
            <IoAccessibility size={24} />
            <p>About Me</p>
          </button>
        </a>
        <a href="#products" className={styles.navLink}>
          <button type="button" className={styles.navItem}>
            <MdLaptopChromebook size={24} />
            <p>Products</p>
          </button>
        </a>
        <a href="#contact" className={styles.navLink}>
          <button type="button" className={styles.navItem}>
            <IoIosMail size={24} />
            <p>Contact</p>
          </button>
        </a>
      </div>

      <div className={styles.externalLinks}>
        <a
          href="https://github.com/technicalplace"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHubを開く"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1tuN_xRYs2BgH3zux7AC-aowcwe6rh2wVfIKsaVFn1Zc/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          aria-label="スキルシートを開く"
        >
          <SiGooglesheets size={28} />
        </a>
      </div>
    </aside>
  );
};