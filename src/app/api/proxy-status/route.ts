import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("http://5.175.246.33:3001/api/status", {
      cache: 'no-store', 
    });
    
    if (!response.ok) throw new Error("Gagal ambil data");
    
    const data = await response.json();
    return NextResponse.json(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ status: "offline", players: 0 }, { status: 500 });
  }
}