// src/app/tiktokm1kImJDgUnEsQIkeMyIcmvsLoHUQVk7z.txt/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'tiktok-developers-site-verification=m1kImJDgUnEsQIkeMyIcmvsLoHUQVk7z',
    {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    }
  );
}