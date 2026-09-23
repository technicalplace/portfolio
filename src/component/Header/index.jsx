import styles from './index.module.css';
import { IoAccessibility } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export const Header = () => {

  const handleHomeClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    history.pushState(null, '', '/');
  };

  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <a href="/" onClick={handleHomeClick}>
          <IoHomeOutline size={36} />
        </a>
        <a href="#about">
          <IoAccessibility size={36} />
        </a>
        <a href="#products">
          <MdLaptopChromebook size={36} />
        </a>
        <a href="#contact">
          <IoIosMail size={36} />
        </a>
      </div>
    </header>
  )
}


