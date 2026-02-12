
# PRD: FoodSwipe - App de Decisão de Comida Estilo Tinder

## 1. VISÃO GERAL DO PRODUTO

### 1.1 Resumo Executivo
FoodSwipe é uma Progressive Web App (PWA) que resolve o problema de indecisão sobre "o que comer hoje" através de uma interface gamificada de swipe, similar ao Tinder. O usuário navega por categorias progressivas de comida até chegar em uma escolha final, onde o app sugere restaurantes/delivery próximos.

### 1.2 Problema
Grupos de pessoas e indivíduos gastam tempo excessivo decidindo o que comer, gerando frustração e perda de tempo. A variedade de opções paralisa a tomada de decisão.

### 1.3 Solução
Interface de swipe intuitiva que segmenta escolhas progressivamente (ex: Hambúrguer → Hambúrguer Artesanal → Restaurantes Específicos), culminando em sugestões acionáveis de delivery/busca.

### 1.4 Objetivos de Negócio
- MVP funcional em 4-6 semanas
- Taxa de completude de funil > 60% (usuário chega até restaurante final)
- Tempo médio de decisão < 2 minutos
- Base para monetização futura (afiliação, parcerias)

---

## 2. PÚBLICO-ALVO

### 2.1 Persona Primária
**Nome**: João, 28 anos
**Contexto**: Profissional urbano que pede delivery 3-4x/semana
**Dor**: Gasta 15-30min decidindo o que comer sozinho ou com parceira
**Comportamento**: Usa iFood, Rappi, busca no Google Maps
**Dispositivo**: Smartphone (Android/iOS), acessa via navegador

### 2.2 Casos de Uso
1. Usuário solo indeciso sobre almoço/jantar
2. Casal/amigos precisando decidir rapidamente
3. Pessoa explorando novas opções de comida
4. Usuário querendo variar da "comida de sempre"

---

## 3. REQUISITOS FUNCIONAIS

### 3.1 Core Features (MVP)

#### RF-001: Sistema de Swipe de Cards
**Descrição**: Usuário visualiza cards com imagens de categorias de comida e pode dar swipe left (rejeitar) ou swipe right (gostar).

**Critérios de Aceitação**:
- Card ocupa 80% da altura da tela mobile
- Imagem de alta qualidade (mín. 800x600px)
- Nome da categoria em texto legível (mín. 18px)
- Swipe detecta gesture com threshold de 100px de movimento horizontal
- Animação suave de rotação do card durante drag (max 15deg)
- Feedback visual: borda verde (like) / vermelha (nope) durante swipe
- Botões alternativos grandes (60x60px) para Like/Nope abaixo do card

**Regras de Negócio**:
- Mínimo 8 cards por categoria
- Cards não se repetem na mesma sessão
- Ordem aleatória a cada nova sessão

#### RF-002: Sistema de Segmentação Progressiva
**Descrição**: Cada like leva o usuário para um nível mais específico de categorização até chegar em escolha final.

**Hierarquia de Categorias** (3 níveis):
```
Nível 1 (Tipo Geral): 
- Hambúrguer
- Pizza
- Comida Japonesa
- Comida Italiana
- Comida Brasileira
- Comida Mexicana
- Vegetariano/Vegano
- Lanches Rápidos
- Sobremesas
- Saudável

Nível 2 (Subtipo):
Hambúrguer →
  - Hambúrguer Artesanal
  - Hambúrguer Smash
  - Hambúrguer Podrão
  - Parrilla

Pizza →
  - Pizza Napolitana
  - Pizza Tradicional
  - Pizza Doce
  - Esfiha/Esfirra

[... outros subtipos]

Nível 3 (Final):
- Resultado final com nome da escolha
```

**Critérios de Aceitação**:
- Like no Nível 1 → carrega 6-10 cards do Nível 2
- Like no Nível 2 → carrega 6-10 cards do Nível 3 (variações/estilos)
- Like no Nível 3 → tela de resultado final
- Usuário pode voltar ao nível anterior (botão back)
- Indicador visual de progresso (ex: "2 de 3")
- Loading state entre transições de nível (máx. 300ms)

**Regras de Negócio**:
- Se usuário der nope em todos cards de um nível, volta ao nível anterior
- Histórico de escolha salvo no localStorage

#### RF-003: Tela de Resultado e Ações
**Descrição**: Após completar a jornada de swipes, usuário vê sua escolha final e opções de ação.

**Elementos da Tela**:
- Título: "Você vai comer [ESCOLHA FINAL]!"
- Imagem grande da escolha
- Botão primário: "Ver Opções no iFood" (deep link ou web)
- Botão secundário: "Buscar no Google" (query estruturada)
- Botão terciário: "Começar de Novo"
- (Opcional) Botão: "Compartilhar Resultado"

**Critérios de Aceitação**:
- Deep link iFood: `ifood://search?q=[categoria]` (fallback pra web)
- Google search: `https://www.google.com/search?q=[categoria]+delivery+perto+de+mim`
- Compartilhar: Web Share API com texto "Decidi comer [X] usando FoodSwipe!"
- Histórico salvo com timestamp no localStorage

**Regras de Negócio**:
- Links abrem em nova aba
- Geolocalização usada para "perto de mim" (com permissão)
- Se geolocalização negada, usa apenas categoria na busca

#### RF-004: Persistência Local de Dados
**Descrição**: Salvar histórico de escolhas e preferências do usuário no localStorage.

**Estrutura de Dados**:
```javascript
{
  "sessions": [
    {
      "id": "uuid",
      "timestamp": "2026-02-12T10:30:00-03:00",
      "finalChoice": "Hambúrguer Artesanal",
      "path": ["Hambúrguer", "Hambúrguer Artesanal"],
      "totalSwipes": 18,
      "likes": 3,
      "nopes": 15
    }
  ],
  "preferences": {
    "favoriteCategories": ["Pizza", "Comida Japonesa"],
    "dislikedCategories": ["Vegetariano"],
    "totalSessions": 5
  }
}
```

**Critérios de Aceitação**:
- Dados salvos após cada sessão completa
- Limite de 50 sessões salvas (remove mais antigas)
- Função de limpar dados disponível em settings
- Graceful handling se localStorage cheio ou bloqueado

#### RF-005: PWA e Instalabilidade
**Descrição**: App funciona como PWA instalável em home screen do celular.

**Critérios de Aceitação**:
- manifest.json configurado com:
  - nome: "FoodSwipe"
  - short_name: "FoodSwipe"
  - icons: 192x192, 512x512
  - display: "standalone"
  - theme_color: "#FF6B6B" (ajustável)
  - background_color: "#FFFFFF"
- Service worker básico registrado
- Funciona offline (cache de assets estáticos)
- Prompt de instalação aparece após 2ª visita
- Splash screen ao abrir app instalado

### 3.2 Features Secundárias (Pós-MVP)

#### RF-006: Histórico de Escolhas
**Descrição**: Tela mostrando últimas 10 escolhas do usuário.

**Critérios de Aceitação**:
- Lista com data, hora e escolha final
- Botão para refazer aquela escolha específica
- Estatísticas básicas (comida mais escolhida)

#### RF-007: Modo Grupo (Futuro)
**Descrição**: Múltiplos usuários swipam juntos e app encontra match.
- Requer backend (Supabase)
- Sistema de sala/código de convite
- Match quando 2+ pessoas derem like na mesma categoria

---

## 4. REQUISITOS NÃO-FUNCIONAIS

### 4.1 Performance
- **RNF-001**: First Contentful Paint < 1.5s em 4G
- **RNF-002**: Time to Interactive < 3s
- **RNF-003**: Animações rodando a 60fps
- **RNF-004**: Tamanho do bundle inicial < 200KB (gzipped)
- **RNF-005**: Lazy loading de imagens com blur placeholder

### 4.2 Usabilidade
- **RNF-006**: Interface 100% mobile-first (320px a 428px width)
- **RNF-007**: Botões tocáveis com mínimo 48x48px
- **RNF-008**: Navegação possível apenas com gestures ou botões (sem dependência de um ou outro)
- **RNF-009**: Feedback tátil (vibração) ao swipe em dispositivos compatíveis
- **RNF-010**: Safe area respeitada em devices com notch

### 4.3 Compatibilidade
- **RNF-011**: Suporte a navegadores: Chrome 90+, Safari 14+, Firefox 88+
- **RNF-012**: Responsivo de 320px a 1920px width
- **RNF-013**: Funciona em modo retrato e paisagem
- **RNF-014**: Sem dependências de features nativas (apenas Web APIs)

### 4.4 Acessibilidade
- **RNF-015**: Contraste mínimo WCAG AA (4.5:1)
- **RNF-016**: Alt text em todas imagens
- **RNF-017**: Navegação por teclado funcional (tab, enter, esc)
- **RNF-018**: Screen reader friendly (ARIA labels)

### 4.5 Segurança e Privacidade
- **RNF-019**: Dados armazenados apenas localmente
- **RNF-020**: Sem tracking de terceiros no MVP
- **RNF-021**: HTTPS obrigatório
- **RNF-022**: Geolocalização apenas com consentimento explícito

---

## 5. ESPECIFICAÇÕES TÉCNICAS

### 5.1 Stack Tecnológica

**Frontend**:
- Framework: Next.js 14+ (App Router)
- Linguagem: TypeScript
- Styling: TailwindCSS 3+
- Animações: Framer Motion
- Swipe Library: react-tinder-card ou framer-motion drag

**Estado**:
- Global State: React Context API ou Zustand (se necessário)
- Persistência: localStorage + custom hooks

**PWA**:
- Plugin: next-pwa
- Service Worker: Workbox
- Manifest: auto-gerado via plugin

**Hospedagem**:
- Plataforma: Vercel
- Domínio: TBD (sugestão: foodswipe.app)
- SSL: Automático via Vercel

### 5.2 Estrutura de Arquivos

```
/app
  /page.tsx                 # Home/landing
  /swipe
    /page.tsx               # Tela principal de swipe
    /result/page.tsx        # Tela de resultado
  /history/page.tsx         # Histórico (pós-MVP)
  /layout.tsx               # Root layout

/components
  /SwipeCard.tsx            # Card individual
  /SwipeContainer.tsx       # Container com lógica de swipe
  /ActionButtons.tsx        # Botões like/nope
  /ProgressIndicator.tsx    # Barra de progresso
  /ResultScreen.tsx         # Tela de resultado

/lib
  /categories.ts            # Dados estáticos das categorias
  /storage.ts               # Funções de localStorage
  /types.ts                 # TypeScript types

/hooks
  /useSwipe.ts              # Lógica de swipe
  /useLocalStorage.ts       # Persistência
  /useCategories.ts         # Gestão de categorias

/public
  /images
    /categories             # Imagens de categorias
  /icons                    # Ícones do PWA
  /manifest.json
```

### 5.3 Schemas de Dados

**Category Interface**:
```typescript
interface Category {
  id: string
  name: string
  level: 1 | 2 | 3
  parentId: string | null
  imageUrl: string
  searchTerms: string[] // Para busca Google/iFood
  description?: string
}
```

**Session Interface**:
```typescript
interface SwipeSession {
  id: string
  timestamp: string
  finalChoice: string
  path: string[] // Caminho de categorias escolhidas
  totalSwipes: number
  likes: number
  nopes: number
  completed: boolean
}
```

**UserPreferences Interface**:
```typescript
interface UserPreferences {
  favoriteCategories: string[]
  dislikedCategories: string[]
  totalSessions: number
  lastSessionDate: string
}
```

### 5.4 APIs e Integrações

**Geolocalização**:
- API: Navigator.geolocation (Web API nativa)
- Uso: Melhorar query de busca com "perto de mim"
- Fallback: Busca genérica sem localização

**Deep Links**:
- iFood: `ifood://search?q={query}` (fallback: https://ifood.com.br/busca?q={query})
- Google: `https://www.google.com/search?q={query}+delivery`

**Compartilhamento**:
- API: Navigator.share (Web Share API)
- Fallback: Copiar link para clipboard

### 5.5 Content Management

**Banco de Imagens**:
- Fonte inicial: Unsplash API (gratuito com atribuição) ou Pexels
- Armazenamento: /public/images otimizadas via sharp/next/image
- Formato: WebP com fallback JPEG
- Resolução: 800x600px (4:3 ratio)

**Categorias**:
- Arquivo estático TypeScript (lib/categories.ts)
- Estrutura hierárquica com relacionamentos parent/child
- Mínimo 10 categorias nível 1, 40 nível 2, 80 nível 3

---

## 6. DESIGN E UX

### 6.1 Wireframes (Descrição Textual)

**Tela 1 - Landing/Home**:
```
[Logo FoodSwipe]
"Não sabe o que comer?"
[Botão Grande: "Começar"]
[Link pequeno: "Ver Histórico"]
```

**Tela 2 - Swipe**:
```
[Indicador: "1 de 3"]
[Card Grande com Imagem]
  - Área de drag
  - Nome da categoria
[Botão ❌] [Botão ❤️]
[Link pequeno: "Voltar"]
```

**Tela 3 - Resultado**:
```
[Emoji/Ícone celebração]
"Você vai comer:"
[NOME DA ESCOLHA]
[Imagem Grande]

[Botão Primário: Ver no iFood]
[Botão Secundário: Buscar no Google]
[Botão Terciário: Começar de Novo]
```

### 6.2 Guia de Estilo

**Cores**:
- Primary: #FF6B6B (vermelho vibrante - rejeitar)
- Secondary: #51CF66 (verde - gostar)
- Background: #F8F9FA (cinza claro)
- Text: #212529 (cinza escuro)
- Accent: #FFA94D (laranja - botões primários)

**Tipografia**:
- Font Family: Inter ou System UI
- Títulos: 24-32px, font-weight 700
- Corpo: 16-18px, font-weight 400
- Botões: 16px, font-weight 600

**Espaçamento**:
- Base: 8px (usar múltiplos: 8, 16, 24, 32, 48)
- Padding de container: 16px mobile, 24px tablet+

**Animações**:
- Duração padrão: 300ms
- Easing: ease-out para entrada, ease-in para saída
- Swipe: spring animation (Framer Motion default)

### 6.3 Fluxo de Usuário

```
[Landing] 
  ↓ "Começar"
[Swipe Nível 1] 
  ↓ Like
[Swipe Nível 2]
  ↓ Like
[Swipe Nível 3]
  ↓ Like
[Resultado Final]
  ↓ "Ver no iFood" → [Abre iFood]
  ↓ "Buscar Google" → [Abre Google]
  ↓ "Começar de Novo" → [Swipe Nível 1]
```

**Fluxos Alternativos**:
- Nope em todos cards → volta nível anterior
- Botão "Voltar" → volta nível anterior (mantém histórico)
- Fechar app → salva progresso (retoma na reabertura)

---

## 7. MILESTONES E ENTREGÁVEIS

### Sprint 1 (Semana 1-2): Setup e Core Swipe
**Entregáveis**:
- [ ] Setup Next.js + TypeScript + Tailwind
- [ ] Estrutura de pastas e arquitetura
- [ ] Componente SwipeCard funcional
- [ ] Sistema de drag com Framer Motion
- [ ] 10 categorias nível 1 com imagens
- [ ] LocalStorage hooks implementados

**Critério de Sucesso**: Conseguir dar swipe em cards e ver feedback visual.

### Sprint 2 (Semana 3-4): Lógica de Segmentação
**Entregáveis**:
- [ ] Sistema de níveis (1→2→3) funcionando
- [ ] 40 categorias nível 2
- [ ] 60 categorias nível 3
- [ ] Indicador de progresso
- [ ] Botão voltar funcional
- [ ] Transições entre níveis

**Critério de Sucesso**: Usuário completa jornada de 3 níveis até resultado.

### Sprint 3 (Semana 5): Resultado e Integrações
**Entregáveis**:
- [ ] Tela de resultado completa
- [ ] Deep links iFood e Google
- [ ] Web Share API
- [ ] Salvamento de sessão
- [ ] Landing page simples

**Critério de Sucesso**: Ao finalizar, usuário consegue buscar restaurantes.

### Sprint 4 (Semana 6): PWA e Polish
**Entregáveis**:
- [ ] PWA configurado (manifest + service worker)
- [ ] App instalável
- [ ] Otimização de performance
- [ ] Testes cross-browser
- [ ] Deploy produção Vercel

**Critério de Sucesso**: App instalável, funciona offline, performance green no Lighthouse.

---

## 8. MÉTRICAS DE SUCESSO

### 8.1 KPIs de Produto
- **Taxa de Completude**: % de usuários que completam jornada até resultado final (target: >60%)
- **Tempo Médio de Decisão**: Tempo da landing até resultado (target: <2min)
- **Taxa de Retorno**: % de usuários que usam 2+ vezes (target: >30%)
- **Taxa de Instalação PWA**: % de visitantes que instalam app (target: >15%)

### 8.2 KPIs Técnicos
- **Lighthouse Score**: Performance >90, Accessibility >90, Best Practices >90
- **Crash Rate**: <1% de sessões
- **Load Time**: <2s em 4G
- **Bounce Rate**: <40% na landing

### 8.3 Análise Qualitativa (Futuro)
- Categorias mais populares
- Pontos de desistência no funil
- Padrões de escolha (ex: pizza é sempre favorita?)

---

## 9. RISCOS E MITIGAÇÕES

| Risco | Impacto | Probabilidade | Mitigação |
|-------|---------|---------------|-----------|
| Usuário enjoa do swipe repetitivo | Alto | Média | Limitar a 8-10 cards por nível, animações envolventes |
| Imagens de baixa qualidade desmotivam | Médio | Baixa | Curadoria manual, usar Unsplash/Pexels profissionais |
| Deep links iFood não funcionam | Baixo | Média | Fallback sempre para web search, testar em múltiplos devices |
| localStorage bloqueado (modo anônimo) | Baixo | Baixa | Graceful degradation, app funciona sem persistência |
| Performance ruim em celulares antigos | Médio | Média | Code splitting, lazy loading, imagens otimizadas |

---

## 10. FUTURAS ITERAÇÕES

### Fase 2 (Pós-MVP)
- Histórico de escolhas visual
- Modo "surpresa-me" (pula direto pra resultado aleatório)
- Filtros (vegetariano, sem glúten, kosher)
- Dark mode

### Fase 3 (Monetização)
- Afiliação iFood/Rappi
- Parcerias com restaurantes (featured placement)
- Modo grupo com backend Supabase
- Analytics agregado

### Fase 4 (Scale)
- App nativo (React Native ou Flutter)
- Recomendações baseadas em ML
- Gamificação (badges, streaks)
- Social features (compartilhar, amigos)

---

## 11. GLOSSÁRIO

- **Swipe**: Gesto de arrastar o dedo horizontalmente na tela
- **Like**: Ação de aprovar uma escolha (swipe right ou botão)
- **Nope**: Ação de rejeitar uma escolha (swipe left ou botão)
- **PWA**: Progressive Web App - site que funciona como app nativo
- **Deep Link**: Link que abre direto em app específico
- **Funil**: Sequência de etapas que usuário percorre (níveis 1→2→3→resultado)
- **Session**: Uma jornada completa de decisão do início ao resultado

---

## 12. APROVAÇÕES E SIGN-OFF

**Criado por**: [Seu Nome]
**Data**: 12/02/2026
**Versão**: 1.0

**Aprovações Necessárias**:
- [ ] Product Owner
- [ ] Tech Lead
- [ ] Designer (se aplicável)

---

## ANEXOS

### A. Exemplo de Árvore de Categorias (JSON)
```json
{
  "categories": [
    {
      "id": "cat-001",
      "name": "Hambúrguer",
      "level": 1,
      "parentId": null,
      "imageUrl": "/images/categories/hamburger.webp",
      "searchTerms": ["hambúrguer", "burger"]
    },
    {
      "id": "cat-002", 
      "name": "Hambúrguer Artesanal",
      "level": 2,
      "parentId": "cat-001",
      "imageUrl": "/images/categories/gourmet-burger.webp",
      "searchTerms": ["hambúrguer artesanal", "burger gourmet"]
    }
  ]
}
```

### B. Checklist de QA Pré-Launch
- [ ] Swipe funciona em iOS Safari
- [ ] Swipe funciona em Android Chrome
- [ ] Botões like/nope funcionam
- [ ] Voltar mantém estado
- [ ] localStorage persiste entre sessões
- [ ] Deep links testados (iFood instalado e não instalado)
- [ ] PWA instalável em iOS e Android
- [ ] Funciona offline
- [ ] Performance >90 no Lighthouse mobile
- [ ] Sem console errors
- [ ] Imagens carregam com placeholder
- [ ] Safe area respeitada em iPhone com notch
