"use client"

import { useState } from "react"
import styles from "./BannerSlide.module.css"

export function BannerSlide({ banners }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === banners.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className={styles.slideshow}>
      <div className={styles.slidesContainer} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        <div className={styles.slidesWrapper}>
          {banners.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <a href={slide.link} target="_blank" rel="noopener noreferrer" className={styles.slideLink}>
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt || `배너 ${index + 1}`}
                  className={styles.slideImage}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 좌우 버튼 */}
      <button onClick={goToPrevious} className={`${styles.navButton} ${styles.prevButton}`} aria-label="이전 배너">
        <img src="/images/main_banner_prev.png"/>
      </button>
      <button onClick={goToNext} className={`${styles.navButton} ${styles.nextButton}`} aria-label="다음 배너">
        <img src="/images/main_banner_next.png"/>
      </button>

      {/* 페이지 인디케이터 */}
      <div className={styles.indicators}>
        {banners.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${currentIndex === index ? styles.activeIndicator : ""}`}
          />
        ))}
      </div>
    </div>
  )
}
