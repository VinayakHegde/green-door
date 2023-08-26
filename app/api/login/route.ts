import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    const { rows } = await sql`SELECT * FROM USERS WHERE Username = ${username} AND Password = ${password};`;
    const { password: pwd, userhash, ...rest } = rows[0];
    const response = NextResponse.json(rest, { status: 200 });

    response.headers.set('Set-Cookie', `greenDoorSession=${userhash}; Path=/; HttpOnly; Secure; SameSite=Strict;`);

    return response;
  } catch (e: any) {
    return NextResponse.json({ message: 'internal server error' }, { status: 500 });
  }
}