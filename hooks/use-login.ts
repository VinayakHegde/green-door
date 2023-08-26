import { useAuth } from "@/components/auth-provider";
import { Service } from "@/service";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
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

  return {
    username,
    setUsername,
    password,
    setPassword,
    onSubmit
  }
}