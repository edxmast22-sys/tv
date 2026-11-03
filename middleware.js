import { NextResponse } from 'next/server';

export function middleware(request) {
  // Pega o User-Agent do visitante
  const userAgent = request.headers.get('user-agent') || '';

  // Lista de termos comuns para identificar bots, crawlers e scrapers
  const botPattern = /bot|crawler|spider|robot|crawling|curl|wget|python|facebookexternalhit|twitterbot|pinterest|linkedinbot|whatsapp|telegrambot|Discordbot/i;

  // Se o User-Agent corresponder a um bot, redireciona para a página desejada
  if (botPattern.test(userAgent)) {
    // Substitua abaixo pela URL para onde os bots devem ir
    return NextResponse.redirect('https://www.takealot.com/');
  }

  // Se não for bot, deixa o usuário seguir normalmente
  return NextResponse.next();
}

// Configuração opcional para rodar em todas as rotas do site
export const config = {
  matcher: '/:path*',
};
