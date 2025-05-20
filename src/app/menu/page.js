'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import MenuList from './component/menuList';
import { Suspense } from 'react';

function MenuContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('type') || '설빙';

  const handleTabChange = (newTab) => {
    router.push(`/menu?type=${newTab}`);
  };

  return (
    <div className='contentArea' style={{padding: '0'}}>
      <div className="subTab">
        <div className="inner">
          <div className="tabLink">
            <button
              onClick={() => handleTabChange('설빙')}
              className={category === '설빙' ? 'active' : ''}
            >
              설빙
            </button>
            <span className="divider">|</span>
            <button
              onClick={() => handleTabChange('사이드')}
              className={category === '사이드' ? 'active' : ''}
            >
              사이드
            </button>
            <span className="divider">|</span>
            <button
              onClick={() => handleTabChange('음료')}
              className={category === '음료' ? 'active' : ''}
            >
              음료
            </button>
          </div>

          <div>
            <MenuList category={category} />
            <div className='bottomTxt'>* 매장 별 메뉴는 상이할 수 있습니다.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <MenuContent />
    </Suspense>
  );
}
