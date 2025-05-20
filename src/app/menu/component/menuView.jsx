'use client';

import './menuView.css';
import menuList from '@/data/menu.json';
import { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';

export default function MenuView({ menu }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const router = useRouter();
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = document.querySelector('.menuSlide');
    if (!swiperContainer) return;
    swiperContainer.style.visibility = 'hidden';
    const savedIdx = parseInt(sessionStorage.getItem('menuSwiperIdx') || '0', 10);
    const swiper = new Swiper(swiperContainer, {
      init: false,
      direction: 'vertical',
      slidesPerView: 4,
      slidesPerGroup: 4,
      initialSlide: savedIdx,
      mousewheel: { releaseOnEdges: true },
      on: {
        init(swiperInstance) {
          const slideEl = swiper.slides[swiper.activeIndex];
          swiperContainer.style.visibility = 'visible';
          setIsBeginning(swiperInstance.isBeginning);
          setIsEnd(swiperInstance.isEnd);
        },
        slideChange: function () {
          setIsBeginning(this.isBeginning);
          setIsEnd(this.isEnd);
        },
      },
    });

    const handleUp = () => swiper.slidePrev();
    const handleDown = () => swiper.slideNext();

    document.querySelector('.btnUp')?.addEventListener('click', handleUp);
    document.querySelector('.btnDown')?.addEventListener('click', handleDown);
    swiperRef.current = swiper;
    swiper.init();
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);

    return () => {
      document.querySelector('.btnUp')?.removeEventListener('click', handleUp);
      document.querySelector('.btnDown')?.removeEventListener('click', handleDown);
    };
  }, []);

  const filteredMenus = menuList.filter((m) => m.category === menu.category);

  return (
    <div className="container menuView">
      <div className="contentArea">
        <div className="menuViewArea">
          <div className="menuSlideArea">
            <button className="btnUp" disabled={isBeginning}>
              <img src="/images/view_sldie_up.png" alt="이전" />
            </button>
            <div className="swiper menuSlide">
              <div className="swiper-wrapper">
                {filteredMenus.map((m) => (
                  <div className="swiper-slide" key={m.id}>
                    <button
                      className={m.id === menu.id ? 'on' : ''}
                      onClick={() => {
                        const idx = swiperRef.current?.activeIndex ?? 0;
                        sessionStorage.setItem('menuSwiperIdx', idx);
                        window.location.href = `/menu/${m.id}`;
                      }}
                    >
                      <img src={m.thumbnail} alt={m.name} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button className="btnDown" disabled={isEnd}>
              <img src="/images/view_sldie_down.png" alt="다음" />
            </button>
          </div>

          <div className="menuSlideBig">
            <div className="imgArea" key={menu.id + '-img'}>
              <img src={menu.image} alt={menu.name} />
            </div>
            <div className="textArea" key={menu.id + '-text'}>
              <div className="productTitle">
                {menu.name.split('\n').map((word, index) => (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ))}
              </div>
              <ul className="thumb">
                {menu.ingredients?.map((item, index) => (
                  <li key={menu.id + '-ingredient-' + index}>
                    <div className="img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="txt">
                      {item.name?.split(' ').map((word, index) => (
                        <span key={index}>
                          {word}
                          <br />
                        </span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="subTitle">
                {menu.subTitle}</div>
              <div className="desc">
                {menu.description?.split('\n').map((line, index) => (
                  <p key={menu.id + '-desc-' + index}>{line}</p>
                ))}
              </div>
              <ul className="infomation">
                <li>
                  <div className="title">영양정보</div>
                  <div className="con">{menu.nutrition}</div>
                </li>
                <li>
                  <div className="title">알레르기 정보</div>
                  <div className="con">{menu.allergy}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
