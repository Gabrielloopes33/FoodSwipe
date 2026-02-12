# 🍔 FoodSwipe

**Descubra o que comer em 3 swipes!**

FoodSwipe é um aplicativo web moderno e interativo que ajuda você a decidir o que comer de forma divertida e rápida. Inspirado em apps de relacionamento, você dá swipe (arrasta) para curtir ou passar opções de comida até encontrar a escolha perfeita!

## ✨ Funcionalidades

- 🎯 **Sistema de Swipe**: Interface intuitiva tipo Tinder para escolher comida
- 🍕 **3 Níveis de Decisão**: 
  - Nível 1: Escolha a categoria (Hambúrguer, Pizza, Japonesa...)
  - Nível 2: Defina o estilo (Artesanal, Fast Food...)
  - Nível 3: Escolha o tipo específico
- 🎨 **Design Moderno**: Interface bonita e responsiva com animações suaves
- 📱 **Mobile First**: Funciona perfeitamente no celular
- 🚀 **Integração**: Botões diretos para iFood e Google
- 🎉 **Animações**: Efeitos visuais celebratórios ao escolher

## 🛠️ Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org/) com App Router
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Build**: Static Export para deploy estático

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Gabrielloopes33/FoodSwipe.git

# Entre na pasta do projeto
cd FoodSwipe/web

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

### Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 📱 Fluxo do App

1. **Tela Inicial**: Clique em "Começar Agora" para iniciar
2. **Swipe**: Arraste para a direita (❤️) para curtir ou esquerda (❌) para passar
3. **3 Etapas**: Cada etapa refine sua escolha até chegar no prato específico
4. **Resultado**: Veja sua escolha final com opções de pedir no iFood ou buscar no Google

## 🎨 Design

O app segue um design moderno inspirado em aplicativos de relacionamento:
- **Cores**: Paleta rosa/coral suave (#FF6B7A) com fundo cinza claro
- **Cards**: Bordas arredondadas (32px) com sombras suaves
- **Botões**: Estilo premium com gradientes e efeitos de brilho
- **Animações**: Transições suaves e micro-interações

## 📂 Estrutura do Projeto

```
web/
├── src/
│   ├── app/                 # Rotas do Next.js (App Router)
│   │   ├── page.tsx         # Tela inicial
│   │   ├── swipe/page.tsx   # Tela de swipe
│   │   ├── result/page.tsx  # Tela de resultado
│   │   └── layout.tsx       # Layout raiz
│   ├── components/          # Componentes React
│   │   ├── SwipeCard.tsx    # Card de swipe
│   │   └── ActionButtons.tsx # Botões de ação
│   ├── lib/                 # Utilitários
│   │   ├── categories.ts    # Dados das categorias
│   │   ├── types.ts         # Tipos TypeScript
│   │   └── utils.ts         # Funções utilitárias
│   └── hooks/               # Custom hooks
├── public/                  # Arquivos estáticos
├── next.config.ts          # Configuração do Next.js
└── netlify.toml            # Configuração do Netlify
```

## 🌐 Deploy

O projeto está configurado para deploy automático no **Netlify**:

1. Conecte seu repositório GitHub no Netlify
2. O deploy será automático a cada push na branch `main`
3. Configurações já definidas em `netlify.toml`

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Distribuído sob a licença MIT.

## 👨‍💻 Autor

**Gabriel Lopes** - [@Gabrielloopes33](https://github.com/Gabrielloopes33)

---

<p align="center">
  Feito com ❤️ e muita fome!
</p>
