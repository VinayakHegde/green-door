import { useState } from "react";
import { useAuth } from "./auth-provider"
import { Service } from "@/service";
import { Cookie, SESSION_COOKIE_NAME } from "@/utils/cookie";
import { Input } from "@/components/input";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const { setUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const doLogin = async () => {
    if (!username || !password) {
      return;
    }
    try {
      const user = await Service.login(username, password);
      if (user.hasOwnProperty('username') && user.hasOwnProperty('fullname')) {
        Cookie.set(SESSION_COOKIE_NAME, { value: JSON.stringify(user) })
        setUser(user);
        router.push('/green-doors');
      }
    } catch (e) {
      alert("Login failed, please check your username and password")
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doLogin();
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 flex-1 w-1/2 bg-white p-4">
      <Input required label="Username" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <Input required label="Password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
    </form>
  );
}