import { Button } from "./button";
import { useAction } from "@/hooks";

export const Item = ({ colour, id, make, name, setIsDeleted }: ItemProps) => {
  const { onEdit, onDelete } = useAction(id, setIsDeleted);
  return (
    <div className="flex flex-row gap-4 items-left justify-between border-2 border-gray-200 shadow-md p-4 w-1/2">
      <p className="text-xl w-28 capitalize text-ellipsis overflow-hidden whitespace-nowrap">{name}</p>
      <p className="text-xl w-28 uppercase">{make}</p>
      <p className="text-xl w-28 uppercase">{colour}</p>
      <div className="flex flex-row gap-4 items-center w-40">
        <Button variant="danger" onClick={onDelete}>Delete</Button>
        <Button onClick={onEdit}>Edit</Button>
      </div>
    </div>
  );
};