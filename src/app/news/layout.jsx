"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from "./news.module.css"

export default function Layout({ children }) {
  const pathname = usePathname();
  
  const handleClick = (href) => {
    if (pathname === href) {
      window.location.reload();
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        <header>
          <div className={styles.subTab}>
            <div className={styles.inner}>
              <div className={styles.tabLink}>
                <Link href='/news/notice' className={`${styles.tab} ${pathname === '/news/notice' ? styles.on : ''}`}
                  onClick={() => handleClick('/news/notice')}>공지사항</Link>
                <Link href='/news/faq' className={`${styles.tab} ${pathname === '/news/faq' ? styles.on : ''}`}
                  onClick={() => handleClick('/news/faq')}>FAQ</Link>
                <Link href='https://sulbing.com/news/onlinecenter.php' className={`${styles.tab} ${pathname === '/news/onlineCenter' ? styles.on : ''}`}
                  onClick={() => handleClick('/news/onlineCenter')}>온라인 고객센터</Link>
                <Link href='/news/onlineCounsel' className={`${styles.tab} ${pathname === '/news/onlineCounsel' ? styles.on : ''}`}
                  onClick={() => handleClick('/news/onlineCounsel')}>온라인 상담내역</Link>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </div>
  );
}