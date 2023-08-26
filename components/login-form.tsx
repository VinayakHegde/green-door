import { Input } from "@/components/input";
import { Button } from "./button";
import { useLogin } from "@/hooks";

export const LoginForm = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    onSubmit
  } = useLogin();
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 flex-1 w-1/2 bg-white p-4">
      <Input required label="Username" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <Input required label="Password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <Button type="submit">Login</Button>
    </form>
  );
}