import styles from './index.module.css';
import { IoAccessibility } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaGithub } from 'react-icons/fa';
import { SiGooglesheets } from 'react-icons/si';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <a href="#about">
          <IoAccessibility size={36} />
          <span>about</span>
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
    </header>
  )
}

