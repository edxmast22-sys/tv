import { NextResponse } from 'next/server';

export function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const botPattern = /bot|crawler|spider|robot|crawling|curl|wget|python|facebookexternalhit|twitterbot|pinterest|linkedinbot|whatsapp|telegrambot|Discordbot/i;

  if (botPattern.test(userAgent)) {
    return NextResponse.redirect('https://www.takealot.com/');
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
