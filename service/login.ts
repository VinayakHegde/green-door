import { Endpoint } from "./endpoint";

export const login = async (username: string, password: string) => {
  const res = await fetch(Endpoint.Login, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (!res.ok) {
    return new Error('Failed to login!');
  }
  const response = await res.json();

  return response;
}