"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-[#382C1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between py-2 md:space-x-10">
          <div className="flex items-center shrink-0">
            <div className="flex items-center">
              <Image
                src="/logo-rosa-sem-fundo.png"
                alt="Rosa Balan Ateliê Logo"
                width={700}
                height={200}
                className="h-24 w-auto"
                priority
              />
            </div>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Fechar menu" : "Abrir menu"}
              </span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Serviços
            </a>
            <a
              href="#localizacao"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end">
            <a
              href="https://wa.me/5511982166060"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#382C1A] hover:bg-[#4a3a2a] transition-colors duration-200"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.688" />
              </svg>
              Fale conosco
            </a>
          </div>
        </div>

        {/* Menu Mobile (dropdown a partir da navbar) */}
        {isMenuOpen && (
          <div className="md:hidden w-full border-t border-gray-100 bg-white">
            <div className="px-4 sm:px-6 lg:px-8 py-4">
              <nav className="mt-2 grid gap-y-2">
                <a
                  href="#inicio"
                  className="block py-2 text-base text-gray-900 hover:text-gray-700"
                >
                  Início
                </a>
                <a
                  href="#sobre"
                  className="block py-2 text-base text-gray-900 hover:text-gray-700"
                >
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block py-2 text-base text-gray-900 hover:text-gray-700"
                >
                  Serviços
                </a>
                <a
                  href="#localizacao"
                  className="block py-2 text-base text-gray-900 hover:text-gray-700"
                >
                  Contato
                </a>
              </nav>
              <div className="mt-4">
                <a
                  href="https://wa.me/5511982166060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-[#382C1A] hover:bg-[#4a3a2a] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.688" />
                  </svg>
                  Fale conosco
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
