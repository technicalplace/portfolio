import styles from './index.module.css';
import { IoAccessibility } from 'react-icons/io5';
import { MdLaptopChromebook } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';
import { links } from '../../constants/links';

export const Aside = ({ onHomeClick }) => {
  return (
    <aside className={styles.aside}>
      <a href="/" className={styles.homeLink} onClick={onHomeClick} aria-label="ホームへ戻る">
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
          href={links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHubを開く"
        >
          <FaGithub size={28} />
        </a>
        <a
          href={links.skillsheet}
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