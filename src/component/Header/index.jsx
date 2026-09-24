import styles from './index.module.css';
import { IoAccessibility } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';
import { links } from '../../constants/links';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <a href="#about">
          <IoAccessibility size={36} />
          <span>about me</span>
        </a>
        <a href="#products">
          <MdLaptopChromebook size={36} />
          <span>products</span>
        </a>
        <a href="#contact">
          <IoIosMail size={36} />
          <span>contact</span>
        </a>
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
    </header>
  )
}
