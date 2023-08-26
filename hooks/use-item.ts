import { Service } from "@/service";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const useItem = (id: string) => {
  const route = useRouter();
  const [item, setItem] = useState<Row | null>(null);
  useEffect(() => {
    Service.getItems(id).then((d) => {
      setItem(d);
    })
  }, [id]);


  const isCreate = (id === 'add');
  const callback = useCallback(() => {
    route.push(`/green-doors`);
  }, []);

  return { item, isCreate, callback };

};