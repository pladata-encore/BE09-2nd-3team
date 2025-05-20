"use client";

import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkOverlay}>
        <img
          src="/images/pc/footer_250416.png"
          className={styles.pcOnly}
          alt="PC 푸터"
        />

        <a
          href="https://sulbing.com/news/onlinecenter.php"
          className={styles.link1}
        />
        <Link href="/rule/privacy" className={styles.link2}></Link>
        <Link href="/rule/email-legal" className={styles.link3}></Link>
        <Link href="/rule/legal-notice" className={styles.link4}></Link>
        <a
          href="#"
          className={styles.link5}
          onClick={(e) => {
            e.preventDefault();
            alert("회원만 이용 가능합니다.");
          }}
        />
      </div>

      <img
        src="/images/mobile/footer_250416.png"
        className={styles.mobileOnly}
        alt="모바일 푸터"
      />

      <div className={styles.mobileLinkOverlay}>
        <a href="/news/onlinecenter.php" className={styles.mobileLink1} />
        <a href="/rule/privacy.php" className={styles.mobileLink2} />
        <a href="/rule/email_legal.php" className={styles.mobileLink3} />
        <a href="/rule/legal_notice.php" className={styles.mobileLink4} />
      </div>
    </footer>
  );
}
