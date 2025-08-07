"use client";

import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-[#382C1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex lg:w-0 lg:flex-1">
            <div className="flex items-center">
              <Image
                src="/logo-rosa-sem-fundo.png"
                alt="Rosa Ateliê Logo"
                width={350}
                height={100}
                className="h-20 w-auto"
                priority
              />
            </div>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
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
              href="#servicos"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Serviços
            </a>
            <a
              href="#portfolio"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Portfolio
            </a>
            <a
              href="#contato"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contato
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end">
            <a
              href="#contato"
              className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#382C1A] hover:bg-[#4a3a2a] transition-colors duration-200"
            >
              Fazer Orçamento
            </a>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/logo-rosa-sem-fundo.png"
                      alt="Rosa Ateliê Logo"
                      width={180}
                      height={60}
                      className="h-14 w-auto"
                      priority
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="sr-only">Fechar menu</span>
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
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <a
                      href="#inicio"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Início
                      </span>
                    </a>
                    <a
                      href="#servicos"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Serviços
                      </span>
                    </a>
                    <a
                      href="#portfolio"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Portfolio
                      </span>
                    </a>
                    <a
                      href="#contato"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Contato
                      </span>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <a
                  href="#contato"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#382C1A] hover:bg-[#4a3a2a] transition-colors duration-200"
                >
                  Fazer Orçamento
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
