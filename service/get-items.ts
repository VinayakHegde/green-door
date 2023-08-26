import { Endpoint } from "./endpoint";

export const getItems = async (id?: string) => {
  const res = await fetch(`${Endpoint.Base}${id ? '/' : ''}${id ?? ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();

  return response;
}