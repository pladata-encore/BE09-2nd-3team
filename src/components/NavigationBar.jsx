import Link from "next/link";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
  return (
    <div className={styles.topnav}>
      <Link href="/">
        <img src="/images/mobile/logo.png" alt="sulbing" />
      </Link>
      <div className={styles.menu}>
        <Link href="/brand/story">BRAND</Link>
        <Link href="/menu">MENU</Link>
        <Link href="/news/notice">NEWS</Link>
        <Link href="/store">STORE</Link>
      </div>
    </div>
  );
}
