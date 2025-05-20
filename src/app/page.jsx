import Link from "next/link"
import { BannerSlide } from "./components/BannerSlide"
import MenuSection from "./components/MenuSection"
import SnsSection from "./components/SnsSection"
import styles from "./page.module.css"
import FallingSnow from "./components/FallingSnow"

export default function Home() {
  const banners = require("../data/banners.json")
  return (
    <>
      <FallingSnow/>
      <BannerSlide banners={banners} />
      <MenuSection menuIds={[1, 2, 3, 4, 5]} />
      <SnsSection />
      <div className={styles.container}>
        <Link href="/store" className={`${styles.mainBanner} ${styles.store}`}>
          내 주변 가까운 '설빙'을 찾아보세요
        </Link>
        <Link href="https://sulbing.com/startup/" className={`${styles.mainBanner} ${styles.startup}`}>
          창업안내 설빙이 여러분의 든든한 파트너가 되겠습니다.
        </Link>
      </div>
    </>
  )
}
