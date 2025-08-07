"use client";

import { useState, useEffect, useRef } from "react";
import { useIsMounted } from "@/lib/hooks";
import { LottieWrapper } from "./LottieWrapper";

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const isMounted = useIsMounted();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay para evitar conflitos de carregamento
          setTimeout(() => {
            setShowAnimation(true);
          }, 300);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [isMounted]);

  const services = [
    {
      title: "Consertos de Roupas",
      description:
        "Roupas rasgadas, danificadas ou que precisam de reforço. Restauramos suas peças favoritas com técnicas profissionais.",
      icon: "🔧",
      features: [
        "Remendos invisíveis",
        "Reparo de rasgos",
        "Reforço de costuras",
        "Conserto de bolsos",
      ],
    },
    {
      title: "Ajustes Personalizados",
      description:
        "Ajustes em ombro, cintura, manga e caimento para que suas roupas tenham o encaixe perfeito no seu corpo.",
      icon: "📏",
      features: [
        "Ajuste de cintura",
        "Encurtamento de mangas",
        "Ajuste de ombros",
        "Modificação de caimento",
      ],
    },
    {
      title: "Bainhas, Zíperes e Barras",
      description:
        "Troca e instalação de zíper, encurtamento de barras e todos os ajustes necessários para o acabamento perfeito.",
      icon: "🧵",
      features: [
        "Troca de zíperes",
        "Barra de calças",
        "Barra de vestidos",
        "Instalação de botões",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicos"
      className="py-16 bg-[#F2F1ED] border-t border-[#382C1A]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="h-56 w-56 mx-auto mb-8">
            {isMounted && isVisible && showAnimation && (
              <LottieWrapper
                src="/animations/rose.lottie"
                width={224}
                height={224}
                loop={false}
                autoplay
                speed={0.5}
                segment={[60, 200]}
              />
            )}
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Oferecemos uma gama completa de serviços de conserto e ajuste para
            manter suas roupas sempre perfeitas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <svg
                        className="h-4 w-4 text-[#382C1A] mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/5511982166060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#382C1A] text-white text-center py-2 px-4 rounded-md hover:bg-[#4a3a2a] transition-colors duration-200 inline-block"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
