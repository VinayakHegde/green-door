'use client'
import { Main } from '@/components/main';
import { MasterForm } from '@/components/master-form'
import { useItem } from '@/hooks'

export default function Item({ params: { id } }: { params: { id: string } }) {
  const { item, isCreate, callback } = useItem(id);
  return (
    <Main className="flex min-h-screen flex-col items-center p-24 w-full">
      <MasterForm item={item} isCreate={isCreate} callback={callback} />
    </Main>
  )
}