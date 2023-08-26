'use client';
import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { AuthContext } from "./auth-context";
import { Cookie, SESSION_COOKIE_NAME } from "@/utils/cookie";


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
      Cookie.delete(SESSION_COOKIE_NAME);
      return;
    }

    const session = Cookie.get(SESSION_COOKIE_NAME);
    if (!session?.value) {
      router.push('/login');
    }

    const sessionUser = session?.value ? JSON.parse(decodeURIComponent(session.value)) : null;
    setUser(sessionUser);
  }, [currentPage]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}