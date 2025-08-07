"use client";

export function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto sobre o ateliê */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
              Sobre o Rosa Balan Ateliê
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              O Rosa Balan Ateliê é especializado em consertos de roupas com
              atenção aos mínimos detalhes. Cada peça recebe o cuidado como se
              fosse única. Seja um ajuste simples ou uma reforma completa, seu
              vestuário está em boas mãos.
            </p>

            {/* Destaques de experiência */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#382C1A] mb-2">
                  10+
                </div>
                <div className="text-sm text-gray-600">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#382C1A] mb-2">
                  1000+
                </div>
                <div className="text-sm text-gray-600">Clientes atendidos</div>
              </div>
            </div>

            {/* Valores */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#382C1A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Qualidade artesanal:
                    </strong>{" "}
                    Cada ponto é feito com precisão e cuidado.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#382C1A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Atendimento personalizado:
                    </strong>{" "}
                    Entendemos suas necessidades específicas.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-[#382C1A]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-600">
                    <strong className="font-medium text-gray-900">
                      Compromisso com prazos:
                    </strong>{" "}
                    Entregamos no tempo combinado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem/ilustração */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#F2F1ED] to-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-4">🧵</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ambiente de Trabalho
                </h3>
                <p className="text-gray-600">
                  Nosso ateliê é equipado com as melhores ferramentas e
                  materiais para garantir resultados perfeitos em cada trabalho.
                </p>
              </div>
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#382C1A]/10 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#382C1A]/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
