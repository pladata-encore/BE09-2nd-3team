"use client";

import useScrollActive from '@/app/brand/hooks/useScrollActive';
import styles from "../brand.module.css"

export default function History() {

  const [refs, actives] = useScrollActive(6);

  return(
    <div className={styles.content}>
      <div className={styles.subTab}>
        <div className={styles.historyArea}>
        <div className={styles.historyTitle}>
          <img src="/images/brand/history_title.png" alt="설빙이 쌓아온 " />
        </div>
        <div className={styles.historyList}>
          <div ref={refs[0]} className={`${styles.historyItem}  ${styles.right} ${actives[0] ? styles.active : ''}`}
          style={actives[0] ? { transitionDelay: `${0 * 0.1}s` } : {}}>
            <img src="/images/brand/history_2025.png" alt="" />
          </div>
          <div ref={refs[1]} className={`${styles.historyItem}  ${styles.left} ${actives[1] ? styles.active : ''}`}
          style={actives[1] ? { transitionDelay: `${1 * 0.1}s` } : {}}>
            <img src="/images/brand/history_2022.png" alt="" />
          </div>
          <div ref={refs[2]} className={`${styles.historyItem}  ${styles.right} ${actives[2] ? styles.active : ''}`}
          style={actives[2] ? { transitionDelay: `${2 * 0.1}s` } : {}}>
            <img src="/images/brand/history_2019.png" alt="" />
          </div>
          <div ref={refs[3]} className={`${styles.historyItem}  ${styles.left} ${actives[3] ? styles.active : ''}`}
          style={actives[3] ? { transitionDelay: `${3 * 0.1}s` } : {}}>
            <img src="/images/brand/history_2016.png" alt="" />
          </div>
          <div ref={refs[4]} className={`${styles.historyItem}  ${styles.left} ${actives[4] ? styles.active : ''}`}
          style={actives[4] ? { transitionDelay: `${4 * 0.1}s` } : {}}>
            <img src="/images/brand/history_2013.png" alt="" />
          </div>
          <div ref={refs[5]} className={`${styles.historyItem}  ${styles.right} ${actives[5] ? styles.active : ''}`}
          style={actives[5] ? { transitionDelay: `${5 * 0.1}s` } : {}}>
            <img src="/images/brand/history_2010.png" alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}