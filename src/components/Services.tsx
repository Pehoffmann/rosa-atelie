export function Services() {
  const services = [
    {
      title: "Costura Sob Medida",
      description:
        "Criação de peças exclusivas feitas especialmente para você, com medidas perfeitas e acabamento impecável.",
      icon: "✂️",
      features: [
        "Roupas femininas",
        "Roupas masculinas",
        "Roupas infantis",
        "Vestidos de festa",
      ],
    },
    {
      title: "Customização",
      description:
        "Transforme suas roupas antigas em peças modernas e estilosas com nossos serviços de customização.",
      icon: "🎨",
      features: [
        "Bordados",
        "Aplicações",
        "Tingimento",
        "Modificações de estilo",
      ],
    },
    {
      title: "Reparos e Ajustes",
      description:
        "Consertos profissionais e ajustes para que suas roupas favoritas voltem a ter o caimento perfeito.",
      icon: "🔧",
      features: [
        "Barra de calças",
        "Ajuste de cintura",
        "Troca de zíperes",
        "Remendos invisíveis",
      ],
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Oferecemos uma gama completa de serviços de costura e customização
            para atender todas as suas necessidades.
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
                        className="h-4 w-4 text-rose-500 mr-2"
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
                  href="#contato"
                  className="w-full bg-rose-600 text-white text-center py-2 px-4 rounded-md hover:bg-rose-700 transition-colors duration-200 inline-block"
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
