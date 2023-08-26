import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  if (isNaN(Number(id))) return NextResponse.json({
    id: 0,
    name: '',
    make: 'audi',
    colour: 'blue',
    code: ''
  }, { status: 200 });
  try {
    const { rows } = await sql<any>`SELECT * FROM greendoor WHERE id = ${id};`;
    return NextResponse.json(rows[0], { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'internal server error' }, { status: 500 });
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await sql`DELETE FROM greendoor WHERE id = ${id};`;

    return NextResponse.json({ message: 'Deleted Successfully' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'internal server error' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await request.json();
    const { name, make, colour, code } = body;
    await sql`UPDATE greendoor SET name = ${name}, make = ${make}, colour = ${colour}, code = ${code} WHERE id = ${id};`;

    return NextResponse.json({ message: 'Updated Successfully' }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: 'internal server error' }, { status: 500 });
  }
}