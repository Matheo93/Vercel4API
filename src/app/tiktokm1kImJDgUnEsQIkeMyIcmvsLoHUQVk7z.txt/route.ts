// src/app/tiktokm1kImJDgUnEsQIkeMyIcmvsLoHUQVk7z.txt/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    'tiktok-developers-site-verification=brXAgjIqtAUEFgq8Z2siDwT5DEVhNYjW',
    {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    }
  );
}