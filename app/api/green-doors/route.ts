import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const getGreendoor = async () => {
  const { rows } = await sql<any>`SELECT * FROM greendoor;`;
  return rows.sort((a, b) => (a.id > b.id) ? 1 : -1);
}
export async function GET() {
  try {
    const greendoors = await getGreendoor();
    return NextResponse.json(greendoors, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'internal server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, make, colour, code } = body;
    await sql`INSERT INTO greendoor (name, make, colour, code) VALUES (${name}, ${make}, ${colour}, ${code});`;

    return NextResponse.json({ message: 'Saved Successfully' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'internal server error' }, { status: 500 });
  }
}