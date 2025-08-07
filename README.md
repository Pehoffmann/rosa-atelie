# 🌹 Rosa Ateliê

Um site moderno e elegante para ateliê de costura, desenvolvido com as melhores tecnologias do mercado.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React 19** - Biblioteca JavaScript para interfaces
- **Vercel** - Plataforma de deploy otimizada

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd rosa-atelie
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

## 🎯 Como Usar

### Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
# ou
yarn build
```

### Iniciar em Produção

Para iniciar o servidor em modo de produção:

```bash
npm start
# ou
yarn start
```

### Linting

Para verificar e corrigir problemas de código:

```bash
npm run lint
# ou
yarn lint
```

## 📁 Estrutura do Projeto

```
rosa-atelie/
├── public/                 # Arquivos estáticos
├── src/
│   ├── app/               # Pages e layouts (App Router)
│   │   ├── globals.css    # Estilos globais
│   │   ├── layout.tsx     # Layout principal
│   │   └── page.tsx       # Página inicial
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   ├── Hero.tsx       # Seção hero
│   │   ├── Services.tsx   # Seção de serviços
│   │   └── Footer.tsx     # Rodapé com contato
│   ├── lib/              # Utilitários e configurações
│   └── types/            # Definições de tipos TypeScript
├── .eslintrc.json        # Configuração do ESLint
├── next.config.js        # Configuração do Next.js
├── package.json          # Dependências e scripts
├── tailwind.config.js    # Configuração do Tailwind
├── tsconfig.json         # Configuração do TypeScript
└── vercel.json          # Configuração do Vercel
```

## 🎨 Personalização

### Cores

O projeto usa uma paleta de cores baseada em tons de rosa. Para alterar as cores principais, edite o arquivo `src/app/globals.css` e os componentes que usam classes como `text-rose-600`, `bg-rose-600`, etc.

### Conteúdo

- **Header**: Edite `src/components/Header.tsx` para alterar o menu de navegação
- **Hero**: Modifique `src/components/Hero.tsx` para personalizar a seção principal
- **Services**: Atualize `src/components/Services.tsx` para alterar os serviços oferecidos
- **Footer**: Modifique `src/components/Footer.tsx` para atualizar informações de contato

### Metadados

Altere o título e descrição do site em `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Seu Título Aqui",
  description: "Sua descrição aqui",
};
```

## 🚀 Deploy na Vercel

### Método 1: Deploy Automático via GitHub

1. Faça push do código para um repositório GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte sua conta GitHub
4. Selecione o repositório
5. O deploy será feito automaticamente

### Método 2: Deploy via CLI

1. Instale a CLI da Vercel:

```bash
npm i -g vercel
```

2. Faça login:

```bash
vercel login
```

3. Execute o deploy:

```bash
vercel
```

### Configurações do Deploy

O arquivo `vercel.json` já está configurado com:

- Build command otimizado
- Região brasileira (gru1) para melhor performance
- Configurações específicas do Next.js

## 📱 Recursos Implementados

- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Menu de navegação interativo
- ✅ Seções organizadas (Hero, Serviços, Contato)
- ✅ Animações suaves com CSS transitions
- ✅ Scroll suave para âncoras
- ✅ Otimização de performance com Next.js
- ✅ SEO otimizado com metadados
- ✅ Tipagem completa com TypeScript
- ✅ Estilos modernos com Tailwind CSS

## 🔄 Próximos Passos

Sugestões para expandir o projeto:

- [ ] Adicionar galeria de trabalhos (portfolio)
- [ ] Implementar formulário de contato funcional
- [ ] Integrar com WhatsApp Business API
- [ ] Adicionar sistema de agendamento
- [ ] Implementar blog/novidades
- [ ] Adicionar animações mais complexas
- [ ] Integrar com Google Analytics
- [ ] Implementar PWA (Progressive Web App)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Se você tiver alguma dúvida ou problema, sinta-se à vontade para:

- Abrir uma issue no GitHub
- Entrar em contato através do email: contato@rosaatelie.com

---

Desenvolvido com ❤️ para o Rosa Ateliê
