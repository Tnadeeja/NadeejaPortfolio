import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { size: string } }
) {
  const sizeParam = params.size || '192'
  const size = parseInt(sizeParam, 10)
  
  // Generate a professional placeholder image
  const svgContent = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${Math.floor(size/2)}" fill="url(#gradient)"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#16a34a;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#15803d;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#14532d;stop-opacity:1" />
        </linearGradient>
      </defs>
      <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="white" font-family="system-ui, -apple-system, sans-serif" font-size="${Math.floor(size/4)}" font-weight="600">
        TN
      </text>
    </svg>
  `
  
  return new NextResponse(svgContent, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
