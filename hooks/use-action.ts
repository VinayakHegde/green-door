import { Service } from "@/service";
import { useRouter } from "next/navigation";

export const useAction = (id: ItemProps['id'], setIsDeleted: ItemProps['setIsDeleted']) => {
  const route = useRouter();
  const onEdit = () => route.push(`/green-doors/${id}`);

  const onDelete = async () => {
    try {
      await Service.delete(id.toString());
      setIsDeleted(true);
    } catch (e) {
      console.warn('Failed to delete!');
    }
  }

  return { onEdit, onDelete };
}