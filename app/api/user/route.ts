import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = cookies()
  const session = cookieStore.get('greenDoorSession');

  if (!session) return NextResponse.json(undefined, { status: 200 });
  const { value } = session;
  const { rows } = await sql`SELECT * FROM USERS WHERE Userhash = ${value};`;
  return NextResponse.json(rows[0], { status: 200 });
}

