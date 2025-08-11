"use client";

import { LottieWrapper } from "./LottieWrapper";
import Image from "next/image";

export function Hero() {
  // A animação agora reserva espaço desde o início via LottieWrapper,
  // evitando layout shift sem necessidade de delays.

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-r from-[#F2F1ED] to-white pb-16 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <LottieWrapper
              src="/animations/tools.lottie"
              width={192}
              height={192}
              loop={true}
              autoplay
              speed={0.5}
            />
          </div>
          {/* Frase de impacto */}
          <h1 className="-mt-10 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
            <span className="block">Costura com cuidado</span>
            <span className="block text-[#382C1A]">em cada detalhe</span>
          </h1>

          {/* Serviços-chave em destaque */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg text-gray-600">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-[#382C1A]/20">
              Consertos de roupas
            </span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-[#382C1A]/20">
              Ajustes personalizados
            </span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm border border-[#382C1A]/20">
              Bainhas, zíperes e barras
            </span>
          </div>

          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl mb-8">
            O Rosa Balan Ateliê é especializado em consertos de roupas com
            atenção aos mínimos detalhes.
          </p>

          {/* Botões de CTA */}
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
            <div className="rounded-md shadow">
              <a
                href="https://wa.me/5511982166060"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#382C1A] hover:bg-[#4a3a2a] transition-colors duration-200 md:py-4 md:text-lg md:px-10"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.688" />
                </svg>
                Fale conosco
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0">
              <a
                href="#servicos"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#382C1A] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos (imagem de recorte no lugar das linhas) */}
      <Image
        src="/recorte-fundo-2.png"
        alt="Decoração"
        width={176}
        height={48}
        className="absolute top-0 -right-25 hidden lg:block rotate-300 opacity-20"
        priority
      />
      <Image
        src="/recorte-fundo-2.png"
        alt="Decoração"
        width={144}
        height={48}
        className="absolute bottom-0 -left-20 hidden lg:block rotate-120 opacity-20"
        priority
      />
    </section>
  );
}
