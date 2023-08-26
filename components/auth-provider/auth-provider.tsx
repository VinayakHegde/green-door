'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { AuthContext } from "./auth-context";
import { Service } from "@/service";

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const currentPage = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (currentPage === '/login') {
      setUser(null);
      Service.logout();
      return;
    } else {
      Service.getUser().then((user) => {
        if (!user) router.push('/login');
        setUser(user);
      }).catch((error) => {
        console.error(error);
        setUser(null);
        router.push('/login');
      });
    }
  }, [currentPage]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}