'use client'
import { useAuth } from '@/components/auth-provider';
import { Item } from '@/components/item'
import { Main } from '@/components/main';
import { Toolbar } from '@/components/toolbar'
import { useItems } from '@/hooks'

export default function Home() {
  const { items, setIsDeleted, user } = useItems();

  return (
    <Main>
      <h1 className="text-4xl font-bold text-center mb-4">Welcome {user?.fullname}</h1>
      <Toolbar />
      {items?.length === 0 && <p className="text-2xl font-bold text-center mt-4 text-gray-500">No items found</p>}
      {
        items?.map((item: Row) => <Item key={item.id} {...item} setIsDeleted={setIsDeleted} />)
      }
    </Main>
  )
}