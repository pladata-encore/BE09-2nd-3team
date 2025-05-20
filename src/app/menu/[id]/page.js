import { redirect } from 'next/navigation';

export default function MenuDetailPage({ params }) {
  redirect(`/menu/menu_view?menu=${params.id}`);
}
