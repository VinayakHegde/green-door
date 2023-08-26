import { Endpoint } from "./endpoint";

export const update = async (id: string, item: Omit<Row, 'id'>) => {
  const res = await fetch(`${Endpoint.Base}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();

  return response;
}