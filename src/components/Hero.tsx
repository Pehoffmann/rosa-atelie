export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-r from-rose-100 to-pink-100 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transforme suas ideias em</span>
            <span className="block text-rose-600">peças únicas</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            No Rosa Ateliê, criamos peças personalizadas com muito carinho e
            atenção aos detalhes. Costura sob medida, customização e reparos com
            qualidade artesanal.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contato"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
              >
                Solicitar Orçamento
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#servicos"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Ver Serviços
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 hidden lg:block">
        <svg
          className="h-32 w-32 text-rose-200"
          fill="currentColor"
          viewBox="0 0 84 84"
        >
          <circle opacity="0.25" cx="42" cy="42" r="42" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 hidden lg:block">
        <svg
          className="h-24 w-24 text-pink-200"
          fill="currentColor"
          viewBox="0 0 84 84"
        >
          <circle opacity="0.25" cx="42" cy="42" r="42" />
        </svg>
      </div>
    </section>
  );
}
