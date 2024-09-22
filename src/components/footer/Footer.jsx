import styles from "./index.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <ul className={styles.wrapper}>
        <Link href="/">
          <li className={styles.home}>Home</li>
        </Link>
        <Link href="/profile">
          <li className={styles.home}>Profile</li>
        </Link>
        <Link href="/categorie">
          <li className={styles.home}>Search</li>
        </Link>
      </ul>
    </>
  );
};

export default Footer;
