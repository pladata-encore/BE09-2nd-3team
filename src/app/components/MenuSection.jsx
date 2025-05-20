'use client'

import Image from "next/image"
import Link from "next/link"
import styles from "./MenuSection.module.css"
import menuData from "@/data/menu.json"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'

export default function MenuSection({ menuIds }) {
  const menuItems = menuData.filter(item => menuIds.includes(item.id))

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <img className={styles.title} src="/images/mobile/main_title_01.png"/>
            <div className={styles.linkContainer}>
              <Link href="/menu?type=사이드">
                <img src="images/mobile/btn_side.png"/>
              </Link>
              <Link href="/menu?type=음료">
                <img src="images/mobile/btn_drink.png"/>
              </Link>
            </div>
          </div>
          <div className={styles.menuContainer}>
            <Swiper
              freeMode={true}
              slidesPerView="auto"
              spaceBetween={15}
              className={styles.menuList}
            >
              {menuItems.map((item) => (
                <SwiperSlide key={item.id} className={styles.menuSlide}>
                  <Link href={`/menu/menu_view?menu=${item.id}`} className={styles.menuItem}>
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <span className={styles.menuName}>{item.name}</span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

