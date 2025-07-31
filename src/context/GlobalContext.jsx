import React, { createContext, useState, useContext } from "react";
import { toast } from "sonner";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Estados do carrinho
  const [cartItems, setCartItems] = useState([]);
  
  // Estados dos favoritos
  const [favoriteItems, setFavoriteItems] = useState([]);
  
  // Estado da categoria selecionada
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Estados de pesquisa
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Estados de UI
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ===== FUNÇÕES DO CARRINHO =====
  
  // Adiciona ou incrementa item no carrinho
  const addToCart = (product) => {
    if (!product || !product.id) return;

    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item && item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item && item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    
    toast.success(`${product.name || 'Produto'} adicionado ao carrinho!`);
  };

  // Incrementa quantidade
  const incrementQuantity = (itemId) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item && item.id === itemId 
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // Decrementa quantidade ou remove item
  const decrementQuantity = (itemId) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item && item.id === itemId);
      
      if (item && (item.quantity || 1) > 1) {
        return prevItems.map(item => 
          item && item.id === itemId 
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        );
      } else {
        return prevItems.filter(item => item && item.id !== itemId);
      }
    });
  };

  // Remove item do carrinho
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item && item.id !== itemId));
    toast.success("Item removido do carrinho");
  };

  // Limpa o carrinho
  const clearCart = () => {
    setCartItems([]);
    toast.success("Carrinho limpo");
  };

  // Calcula total de itens no carrinho
  const getCartTotalItems = () => {
    return cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  // Calcula valor total do carrinho
  const getCartTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      let price = 0;
      
      if (typeof item.price === 'number') {
        price = item.price;
      } else if (typeof item.price === 'string') {
        price = parseFloat(String(item.price).replace("R$", "").replace(".", "").replace(",", ".").trim());
      }
      
      return total + (isNaN(price) ? 0 : price * (item.quantity || 1));
    }, 0);
  };

  // ===== FUNÇÕES DOS FAVORITOS =====
  
  // Adiciona ou remove item dos favoritos
  const toggleFavorite = (product) => {
    if (!product || !product.id) return;

    setFavoriteItems(prevItems => {
      const existingItem = prevItems.find(item => item && item.id === product.id);
      
      if (existingItem) {
        toast.success(`${product.name || 'Produto'} removido dos favoritos`);
        return prevItems.filter(item => item && item.id !== product.id);
      } else {
        toast.success(`${product.name || 'Produto'} adicionado aos favoritos`);
        return [...prevItems, product];
      }
    });
  };

  // Remove item dos favoritos
  const removeFavorite = (productId) => {
    setFavoriteItems(prevItems => prevItems.filter(item => item && item.id !== productId));
    toast.success("Item removido dos favoritos");
  };

  // Limpa os favoritos
  const clearFavorites = () => {
    setFavoriteItems([]);
    toast.success("Favoritos limpos");
  };

  // Verifica se um produto está nos favoritos
  const isFavorite = (productId) => {
    return favoriteItems.some(item => item && item.id === productId);
  };

  // ===== FUNÇÕES DE CATEGORIA =====
  
  // Muda categoria selecionada
  const changeCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    
    const categoryNames = {
      'all': 'Todos',
      'bouquets': 'Buquês',
      'flowers': 'Flores',
      'indoor': 'Interior',
      'cactus': 'Cactos'
    };
    
    if (categoryId !== 'all') {
      toast.success(`Navegando para ${categoryNames[categoryId] || categoryId}`);
    }
  };

  // ===== FUNÇÕES DE PESQUISA =====
  
  // Realiza pesquisa
  const performSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // Importação dinâmica para evitar dependência circular
    import('../data/products').then(({ products }) => {
      const filtered = products.filter(product => 
        (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.category && product.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      setSearchResults(filtered);
      
      if (filtered.length > 0) {
        toast.success(`Encontrados ${filtered.length} produto${filtered.length !== 1 ? 's' : ''} para "${searchTerm}"`);
      } else {
        toast.info(`Nenhum produto encontrado para "${searchTerm}"`);
      }
    });
  };

  // Navega para categoria do produto clicado
  const navigateToProductCategory = (product) => {
    if (product && product.category) {
      changeCategory(product.category);
    }
    setIsSearching(false);
    setSearchResults([]);
  };

  // Fecha a pesquisa
  const closeSearch = () => {
    setIsSearching(false);
    setSearchResults([]);
  };

  // ===== FUNÇÕES DE UI =====
  
  // Toggle do carrinho
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Toggle do menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o carrinho
  const closeCart = () => {
    setIsCartOpen(false);
  };

  // Fecha o menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        // Estados
        cartItems,
        favoriteItems,
        selectedCategory,
        searchResults,
        isSearching,
        isCartOpen,
        isMenuOpen,
        
        // Funções do carrinho
        addToCart,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        clearCart,
        getCartTotalItems,
        getCartTotalPrice,
        
        // Funções dos favoritos
        toggleFavorite,
        removeFavorite,
        clearFavorites,
        isFavorite,
        
        // Funções de categoria
        changeCategory,
        
        // Funções de pesquisa
        performSearch,
        navigateToProductCategory,
        closeSearch,
        
        // Funções de UI
        toggleCart,
        toggleMenu,
        closeCart,
        closeMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Hook personalizado para usar o contexto
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext deve ser usado dentro de um GlobalProvider');
  }
  return context;
};

export { GlobalContext, GlobalProvider, useGlobalContext }; 