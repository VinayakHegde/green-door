import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ message: 'Loggedout successfully' }, { status: 200 });
  response.headers.set('Set-Cookie', `greenDoorSession='loggedOut'; Path=/; HttpOnly; Secure; SameSite=Strict; expires=Thu, Jan 01 1970 00:00:00 UTC;`);
  return response;
}
