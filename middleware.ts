import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { sql } from '@vercel/postgres';

const validateUserHash = async (session?: { value: string }) => {
  if (!session) return false;
  const { value } = session;
  const { rows } = await sql`SELECT * FROM USERS WHERE Userhash = ${value};`;
  if (rows.length === 0) return false;
  return true;
}

export async function middleware(request: NextRequest) {
  if (await validateUserHash(request.cookies.get('greenDoorSession'))) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
  matcher: ['/green-doors/:path*'],
}