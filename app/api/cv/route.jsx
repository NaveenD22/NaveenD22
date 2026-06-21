import React from 'react';
import { renderToBuffer } from '@react-pdf/renderer';
import CvDocument from '@/lib/CvDocument';

// Server-only: @react-pdf/renderer needs Node APIs.
export const runtime = 'nodejs';
// Generate on request, then rely on Cache-Control below for CDN caching.
// (force-static would try to prerender at build time, which breaks PDF streaming.)
export const dynamic = 'force-dynamic';

const FILE_NAME = 'Naveen-Dudhyal-CV.pdf';

export async function GET(request) {
  const buffer = await renderToBuffer(<CvDocument />);

  // ?view=1 → preview inline in browser; default → download attachment
  const url = new URL(request.url);
  const inline = url.searchParams.get('view') === '1';

  return new Response(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Length': String(buffer.length),
      'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename="${FILE_NAME}"`,
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  });
}
