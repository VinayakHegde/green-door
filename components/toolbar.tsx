import { useRouter } from "next/navigation";
import { Button } from "./button";

export const Toolbar = () => {
  const route = useRouter();
  const onAdd = () => route.push('/green-doors/add');
  return (
    <div className="flex flex-row gap-4 items-center justify-between border-2 border-gray-200 shadow-md p-4 w-1/2">
      <h2 className="text-2xl font-bold w-28">Name</h2>
      <h2 className="text-2xl font-bold w-28">Make</h2>
      <h2 className="text-2xl font-bold w-28">Colour</h2>
      <div className="flex flex-row gap-4 items-center justify-end  w-40">
        <Button variant="secondary" onClick={onAdd}>Add</Button>
      </div>
    </div>
  );
}
