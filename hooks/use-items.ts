import { useAuth } from "@/components/auth-provider";
import { Service } from "@/service";
import { useCallback, useEffect, useState } from "react";

export const useItems = () => {
  const { user } = useAuth();

  const [items, setItems] = useState<Row[]>([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const getItems = useCallback(async () => {
    try {
      const data = await Service.getItems();
      setItems(data);
      setIsDeleted(false);
    } catch (e) {
      console.warn('Failed to get items!');
    }
  }, []);

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    if (isDeleted) {
      getItems();
    }
  }, [isDeleted]);

  return { items, setItems, isDeleted, setIsDeleted, user };
}