"use client";

import styles from "../brand.module.css"

export default function BI() {

  return (
    <div className={styles.ciArea}>
      <div>
        <video playsInline autoPlay muted id="logo">
          <source src="/images/brand/Logo.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <video playsInline autoPlay muted id="symbol">
          <source src="/images/brand/Symbol.mp4" type="video/mp4" media="(min-width:1024px)" />
        </video>
      </div>
    </div>
  );
}