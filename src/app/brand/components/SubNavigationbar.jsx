"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "../brand.module.css";

export default function SubNavigationBar() {
  const pathname = usePathname();
  
  const handleClick = (href) => {
    if (pathname === href) {
      window.location.reload();
    }
  }

  return (
    <div>
      <nav className={styles.subTab}>
        <div className = {styles.inner}>
          <div className = {styles.tabLink}>
            <Link href='/brand/story/' className={`${styles.tab} ${pathname === '/brand/story' ? styles.on : ''}`}
              onClick={() => handleClick('/brand/story')}>설빙 스토리</Link>
            <Link href='/brand/history' className={`${styles.tab} ${pathname === '/brand/history' ? styles.on : ''}`}
              onClick={() => handleClick('/brand/history')}>연혁</Link>
            <Link href='/brand/bi' className={`${styles.tab} ${pathname === '/brand/bi' ? styles.on : ''}`}
              onClick={() => handleClick('/brand/bi')}>BI</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}