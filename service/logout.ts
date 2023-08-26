import { Endpoint } from "./endpoint";

export const logout = async () => {
  const res = await fetch(Endpoint.Logout, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await res.json();

  return response;
}