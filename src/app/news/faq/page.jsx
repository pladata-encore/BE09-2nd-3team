'use client';

import { useState } from 'react';
import styles from "../news.module.css"
import faqItems from "../faq/faqData";

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={styles.newsArea}>
      <div className={styles.newsTitle}>
        <img src="/images/news/faq_title.png" alt="자주묻는 질문" />
      </div>
      <ul className={styles.faqList}>
        {faqItems.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <li key={index} className={`${styles.item} ${isOpen ? styles.on : ""}`}>
              <button className={styles.faqTitle} onClick={() => toggleOpen(index)}>
                {item.question}
              </button>
              <div className={`${styles.faqContent} ${isOpen ? styles.on : ""}`}>
                <div className={styles.a}>A.</div>
                <div className={styles.aCon} >
                  {item.answer}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}