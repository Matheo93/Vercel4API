// src/app/tiktokukZITdUZpvaA7Z2IPGwcr6WwRtiYQI3c.txt/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'tiktok-developers-site-verification=ukZITdUZpvaA7Z2IPGwcr6WwRtiYQI3c',
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}