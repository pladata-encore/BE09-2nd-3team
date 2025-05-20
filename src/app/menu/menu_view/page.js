'use client';

import { useSearchParams } from 'next/navigation';
import MenuView from '../component/menuView';
import menuList from '@/data/menu.json';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

function MenuViewContent() {
  const searchParams = useSearchParams();
  const menuId = Number(searchParams.get('menu'));
  const menu = menuList.find((item) => item.id === menuId);

  if (!menu) return notFound();

  return <MenuView menu={menu} />;
}

export default function MenuViewPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <MenuViewContent />
    </Suspense>
  );
}
