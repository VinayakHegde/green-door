import { Endpoint } from "./endpoint";

export const getUser = async () => {

  const res = await fetch(Endpoint.User, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();

  return response;
}