import styles from "../news.module.css"
import Link from "next/link";

export default function Notice() {
  return(
    <div className={styles.newsArea}>
        <div className={styles.newsTitle}>
          <img src="/images/news/notice_title.png" alt="새소식 &amp; 공지" />
        </div>
        <ul className={styles.noticeList}>
          <li>
            <Link href="https://sulbing.com/news/view.php?news=13" className={styles.thumbItem} data-view="13">
              <div className={styles.thumb}>
                <img src="/images/news/notice_thumb_aufybmz.png" alt="" />
              </div>
              <div className={styles.textArea}>
                <div className={styles.title}>차림설빙 팥, 판매지점 확대!</div>
                <div className={styles.date}>25년 3월 13일 ~ 지속진행</div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="https://sulbing.com/news/view.php?news=10" className={styles.thumbItem} data-view="10">
              <div className={styles.thumb}>
                <img src="/images/news/notice_thumb_mymetsr.jpg" alt="" />
              </div>
              <div className={styles.textArea}>
                <div className={styles.title}>차림설빙 팥, 판매지점 확대!</div>
                <div className={styles.date}>25년 3월 13일 ~ 지속진행</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
  );
}