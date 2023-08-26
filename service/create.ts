import { Endpoint } from "./endpoint";

export const create = async (item: Omit<Row, 'id'>) => {
  const res = await fetch(Endpoint.Base, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();

  return response;
}