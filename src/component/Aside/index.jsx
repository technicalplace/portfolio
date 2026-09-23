import styles from './index.module.css';
import { IoAccessibility, IoHomeOutline } from 'react-icons/io5';
import { MdLaptopChromebook } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';

export const Aside = () => {
  const handleHomeClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    window.history.pushState(null, '', '/');
  };

  return (
    <aside className={styles.aside}>
      <a href="/" className={styles.homeLink} onClick={handleHomeClick}>
        <IoHomeOutline className={styles.homeIcon} size={26} aria-hidden="true" />
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
    </aside>
  );
};