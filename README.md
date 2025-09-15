# Portfólio Paloma - IA na Linguagem Certa

## Visão Geral

Este é um portfólio online moderno e sofisticado desenvolvido para Paloma, especialista em Inteligência Artificial e análise de linguagem natural. O site combina tecnologia, essência humana e elementos da natureza em um design clean e elegante.

## Características Principais

### 🎨 Design
- **Paleta de Cores**: Tons de azul profundo, verde sutil, cinzas elegantes e dourado suave
- **Tipografia**: Inter/Poppins para títulos, Source Sans Pro para corpo do texto
- **Elementos Visuais**: Gradientes sutis, formas orgânicas abstratas, animações suaves
- **Responsividade**: Design mobile-first com breakpoints otimizados

### 🌟 Funcionalidades
- **Navegação Suave**: Scroll suave entre seções com indicador de seção ativa
- **Multilíngue**: Suporte completo para Português e Inglês
- **Animações**: Transições suaves com Framer Motion
- **Interatividade**: Hover effects, micro-interações e elementos flutuantes
- **Acessibilidade**: Contraste adequado, navegação por teclado, semântica HTML

### 📱 Seções do Site

#### 1. Hero Section
- Apresentação impactante com tagline
- Foto profissional (placeholder)
- CTAs para navegação
- Elementos visuais animados

#### 2. Sobre Mim
- Biografia profissional detalhada
- Lista de especialidades
- Galeria visual com imagens de referência
- Destaque para expertise em linguagem

#### 3. Projetos
- Grid responsivo de projetos
- Categorização por tipo (Prompts, Copywriting, Análise NLP)
- Cards interativos com hover effects
- Tags e descrições detalhadas

#### 4. Contato
- Informações de contato profissional
- Links para redes sociais
- Design clean e acessível
- Email personalizado por idioma

## Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Framework de estilos
- **Framer Motion**: Animações e transições
- **Lucide React**: Ícones modernos
- **shadcn/ui**: Componentes de UI

## Estrutura do Projeto

```
portfolio-paloma/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   ├── components/
│   │   └── ui/          # Componentes shadcn/ui
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos personalizados
│   └── main.jsx         # Ponto de entrada
├── package.json
└── README.md
```

## Como Executar

### Desenvolvimento
```bash
cd portfolio-paloma
pnpm install
pnpm run dev
```

### Build para Produção
```bash
pnpm run build
```

### Preview da Build
```bash
pnpm run preview
```

## Personalização

### Conteúdo
O conteúdo está organizado no objeto `content` dentro do `App.jsx`, separado por idiomas (pt/en). Para atualizar:

1. **Textos**: Edite as strings nos objetos `pt` e `en`
2. **Projetos**: Modifique o array `items` em `projects`
3. **Especialidades**: Atualize o array `skills` em `about`
4. **Contato**: Altere as informações em `contact`

### Imagens
- Substitua as imagens em `src/assets/` pelas imagens reais
- Atualize as importações no topo do `App.jsx`
- Mantenha as proporções adequadas para o layout

### Cores e Estilos
- Cores principais definidas no `App.css` usando CSS custom properties
- Gradientes e efeitos visuais podem ser ajustados nas classes Tailwind
- Animações configuradas via Framer Motion

## SEO e Performance

- **Meta tags**: Configuradas no `index.html`
- **Imagens otimizadas**: Formatos WebP recomendados
- **Lazy loading**: Implementado para imagens
- **Minificação**: Automática via Vite
- **Responsive images**: Diferentes tamanhos para diferentes dispositivos

## Acessibilidade

- **Contraste**: Cores testadas para WCAG AA
- **Navegação**: Suporte completo a teclado
- **Semântica**: HTML estruturado corretamente
- **Alt text**: Todas as imagens possuem descrições
- **Focus indicators**: Visíveis e bem definidos

## Deploy

O site está pronto para deploy em qualquer plataforma que suporte sites estáticos:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop da pasta `dist/`
- **GitHub Pages**: Via GitHub Actions
- **Manus Deploy**: `service_deploy_frontend`

## Manutenção

### Atualizações de Conteúdo
1. Edite o objeto `content` no `App.jsx`
2. Teste localmente com `pnpm run dev`
3. Faça build com `pnpm run build`
4. Deploy da pasta `dist/`

### Novos Projetos
1. Adicione novo objeto ao array `projects.items`
2. Inclua imagem correspondente em `assets/`
3. Teste a responsividade
4. Atualize em ambos os idiomas

### Novas Funcionalidades
- Mantenha a consistência visual
- Teste em diferentes dispositivos
- Verifique acessibilidade
- Documente mudanças

## Suporte

Para dúvidas ou suporte técnico, consulte:
- Documentação do React: https://react.dev
- Documentação do Tailwind: https://tailwindcss.com
- Documentação do Framer Motion: https://framer.com/motion

---

**Desenvolvido com ❤️ para Paloma - IA na Linguagem Certa**

