import { Endpoint } from "./endpoint";

export const deleteItem = async (id: string) => {
  const res = await fetch(`${Endpoint.Base}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();

  return response;
}