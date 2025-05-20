"use client";

import useScrollActive from '@/app/brand/hooks/useScrollActive';
import styles from "../brand.module.css"

export default function Story() {

  const [refs, actives] = useScrollActive(15);

  return (
    <div className={styles.content}>
      <div className={styles.brandArea}>
        <div ref={refs[0]} className={`${styles.brandTitle1} ${styles.motion} ${actives[0] ? styles.active : ''}`}
        style={actives[0] ? { transitionDelay: `${0 * 0.1}s` } : {}}>
          <img src="/images/brand/brand_img_01.png" alt="Slogan" />
        </div>
        <div ref={refs[1]} className={`${styles.brandimg} ${styles.motion} ${actives[1] ? styles.active : ''}`}
        style={actives[1] ? { transitionDelay: `${1 * 0.1}s` } : {}}>
          <img src="/images/brand/brand_img_02.png" alt="Happiness Tastes Sweet 달콤함을 넘어 행복에 닿습니다. 한국적인 맛과 멋을 재해석한 맛있는 메뉴와 소담한 공간으로 다채로운 행복을 전합니다." />
        </div>

        <div ref={refs[2]} className={`${styles.brandTitle2} ${styles.motion} ${actives[2] ? styles.active : ''}`}
        style={actives[2] ? { transitionDelay: `${2 * 0.1}s` } : {}}>
          <img src="/images/brand/brand_img_03.png" alt="Brand Concept" />
        </div>
        <div ref={refs[3]} className={`${styles.brandText1} ${styles.motion} ${actives[3] ? styles.active : ''}`}
        style={actives[3] ? { transitionDelay: `${3 * 0.1}s` } : {}}>
          <img src="/images/brand/brand_img_04.png" alt="행복이 쌓이는 설빙" />
        </div>

        <div ref={refs[4]} className={`${styles.brandTitle3} ${styles.motion} ${actives[4] ? styles.active : ''}`}
        style={actives[4] ? { transitionDelay: `${4 * 0.1}s` } : {}}>
          <img src="/images/brand/brand_img_05.png" alt="Core Identity" />
        </div>
        <div className={styles.brandCore}>
          <div ref={refs[5]} className={`${styles.item} ${styles.item1} ${styles.motion} ${actives[5] ? styles.active : ''}`}
          style={actives[5] ? { transitionDelay: `${5 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_06.png" alt="미각적 행복" /></div>
          <div ref={refs[6]} className={`${styles.item} ${styles.item2} ${styles.motion} ${actives[6] ? styles.active : ''}`}
          style={actives[6] ? { transitionDelay: `${6 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_07.png" alt="시각적 행복" /></div>
          <div ref={refs[7]} className={`${styles.item} ${styles.item3} ${styles.motion} ${actives[7] ? styles.active : ''}`}
          style={actives[7] ? { transitionDelay: `${7 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_08.png" alt="경험적 행복" /></div>
        </div>
        <div className={styles.brandText}>
          <div ref={refs[8]} className={`${styles.item} ${styles.item1} ${styles.motion} ${actives[8] ? styles.active : ''}`}
          style={actives[8] ? { transitionDelay: `${8 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_09.png" alt="미각적 행복 익숙한 재료를 특별한 맛으로 재해석한 입이 즐거운 메뉴" />
          </div>
          <div ref={refs[9]} className={`${styles.item} ${styles.item2} ${styles.motion} ${actives[9] ? styles.active : ''}`}
          style={actives[9] ? { transitionDelay: `${9 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_10.png" alt="시각적 행복 각양각색의 재료들이 만나 만들어내는 눈이 즐거운 메뉴" />
          </div>
          <div ref={refs[10]} className={`${styles.item} ${styles.item3} ${styles.motion} ${actives[10] ? styles.active : ''}`}
          style={actives[10] ? { transitionDelay: `${10 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_11.png" alt="경험적 행복 먹는 과정이 스토리가 되고 따뜻한 담소를 나누는 정다운 공간" />
          </div>
        </div>

        <div ref={refs[11]} className={`${styles.brandTitle4} ${styles.motion} ${actives[11] ? styles.active : ''}`}
        style={actives[11] ? { transitionDelay: `${11 * 0.1}s` } : {}}>
          <img src="/images/brand/brand_img_12.png" alt="Personality" />
        </div>
        <div className={styles.brandTag}>
          <div ref={refs[12]} className={`${styles.item} ${styles.item1} ${styles.motion} ${actives[12] ? styles.active : ''}`}
          style={actives[12] ? { transitionDelay: `${12 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_13.png" alt="#각양각색 호기심 많고 새로운 시도와 조합을 두려워 하지 않는 도전 정신" />
          </div>
          <div ref={refs[13]} className={`${styles.item} ${styles.item2} ${styles.motion} ${actives[13] ? styles.active : ''}`}
          style={actives[13] ? { transitionDelay: `${13 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_14.png" alt="#다정다감 한 겨울의 함박눈처럼 포근포근한 말투와 서정적이고 따뜻한 감각" />
          </div>
          <div ref={refs[14]} className={`${styles.item} ${styles.item3} ${styles.motion} ${actives[14] ? styles.active : ''}`}
          style={actives[14] ? { transitionDelay: `${14 * 0.1}s` } : {}}>
            <img src="/images/brand/brand_img_15.png" alt="#함께하는 사랑하는 사람들과 함께 할 때 배가 되는 즐거움 언제나 반겨주는 다정한 친구" />
          </div>
        </div>
      </div>
    </div>
  );
}