# 🌸 Nivara - Floricultura Online

Uma aplicação completa de e-commerce para floricultura com área do cliente e painel administrativo.

## ✨ Funcionalidades

### 🛍️ Área do Cliente
- **Catálogo de Produtos**: Visualização de flores, buquês e plantas
- **Filtros por Categoria**: Filtre produtos por tipo (Buquês, Flores, Interior, Cactos)
- **Carrinho de Compras**: Adicione produtos, ajuste quantidades e finalize compras
- **Sistema de Favoritos**: Marque produtos como favoritos
- **Design Responsivo**: 2 colunas no mobile, 4 no desktop
- **Tema Escuro/Claro**: Alternância entre modos de visualização

### 🏢 Painel Administrativo
- **Dashboard**: Visão geral com estatísticas de vendas
- **Gerenciamento de Produtos**: Adicionar, editar e remover produtos
- **Controle de Pedidos**: Acompanhar status dos pedidos
- **Gestão de Clientes**: Visualizar informações dos clientes
- **Interface Intuitiva**: Navegação por abas organizadas

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **Sonner** - Notificações toast
- **Context API** - Gerenciamento de estado

## 📱 Layout Responsivo

### Mobile (2 colunas)
- Cards de produtos otimizados para telas pequenas
- Navegação mobile-friendly
- Carrinho lateral deslizante

### Desktop (4 colunas)
- Grid responsivo que se adapta ao tamanho da tela
- Interface completa com todas as funcionalidades
- Painel administrativo com abas

## 🎨 Componentes Principais

### ProductCard
- Imagem do produto com hover effect
- Botão de favorito
- Badge de desconto
- Avaliação com estrelas
- Botão "Adicionar ao Carrinho"

### ShoppingCart
- Lista de itens no carrinho
- Controles de quantidade
- Cálculo automático do total
- Processo de checkout simulado

### CategoryFilter
- Filtros por categoria
- Design de botões arredondados
- Estado visual ativo/inativo

## 🛠️ Como Executar

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   npm run dev
   ```

3. **Acessar a aplicação**:
   - Abra `http://localhost:5173` no navegador
   - Use os botões no canto superior direito para alternar entre área do cliente e administrativa

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de UI base
│   ├── Header.jsx      # Header da área do cliente
│   ├── AdminHeader.jsx # Header da área administrativa
│   ├── ProductCard.jsx # Card de produto
│   ├── ProductGrid.jsx # Grid de produtos
│   ├── ShoppingCart.jsx # Carrinho de compras
│   └── CategoryFilter.jsx # Filtros de categoria
├── pages/              # Páginas principais
│   ├── ClientHome.jsx  # Página principal do cliente
│   └── AdminDashboard.jsx # Painel administrativo
├── data/               # Dados mockados
│   └── products.js     # Produtos e categorias
└── lib/                # Utilitários
    └── utils.js        # Funções utilitárias
```

## 🎯 Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] Integração com banco de dados
- [ ] Sistema de pagamentos
- [ ] Upload de imagens
- [ ] Sistema de avaliações
- [ ] Notificações em tempo real
- [ ] Relatórios avançados
- [ ] Sistema de cupons

## 👨‍💻 Desenvolvido por

**Quizito** - Desenvolvedor Full Stack

---

*Projeto desenvolvido com ❤️ para demonstrar uma solução completa de e-commerce para floricultura.*
