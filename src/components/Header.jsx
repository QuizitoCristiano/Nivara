import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart, Heart, Moon, Sun } from "lucide-react";
import UserAvatar from "./UserAvatar";
import SearchBar from "./ui/SearchBar";
import ShoppingCartComponent from "./ShoppingCart";
import { useTheme } from "@/hooks/useTheme";
import { toast } from "sonner";
import { useGlobalContext } from "@/context/GlobalContext";

export default function Header({ currentPage = "home", onNavigate, onAdminAccess }) {
  const { 
    cartItems, 
    isCartOpen, 
    isMenuOpen, 
    searchResults, 
    isSearching,
    toggleCart, 
    toggleMenu, 
    closeCart, 
    closeMenu,
    performSearch,
    navigateToProductCategory,
    closeSearch
  } = useGlobalContext();
  
  const { theme, toggleTheme, mounted } = useTheme();

  const handleFavoritesClick = () => {
    toast("Favoritos Do Usuário Quizito");
  };

  const navItems = [
    { name: "Home", href: "#", page: "home" },
    { name: "Sobre", href: "#", page: "sobre" },
    { name: "Serviços", href: "#", page: "servicos" },
    { name: "Contato", href: "#", page: "contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-purple-600">Nivara</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
                             <button
                 key={item.name}
                 onClick={() => {
                   console.log('Navegando para:', item.page);
                   onNavigate && onNavigate(item.page);
                 }}
                 className={`text-sm font-medium transition-colors focus:outline-none focus:ring-0 focus:bg-transparent dark:focus:bg-transparent focus:shadow-none ${
                   currentPage === item.page
                     ? "text-purple-600 font-semibold"
                     : "text-muted-foreground hover:text-foreground"
                 }`}
                 style={{ outline: 'none', boxShadow: 'none' }}
                 type="button"
               >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-[280px] mx-4">
            <SearchBar onSearch={performSearch} />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Favorites */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleFavoritesClick}
              className="h-9 w-9 focus:outline-none focus:ring-0"
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Favoritos</span>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleCart}
              className="h-9 w-9 relative focus:outline-none focus:ring-0"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Carrinho</span>
                             {/* Badge for cart items */}
               {cartItems.length > 0 && (
                 <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                   {cartItems.reduce((total, item) => total + (item.quantity || 1), 0)}
                 </span>
               )}
            </Button>

                        {/* User Avatar */}
            <UserAvatar onAdminAccess={onAdminAccess} />
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-9 w-9 focus:outline-none focus:ring-0"
              disabled={!mounted}
            >
              {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Alternar tema</span>
            </Button>
 
  
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden h-9 w-9 focus:outline-none focus:ring-0"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t">
              {/* Search Bar - Mobile */}
              <div className="px-3 py-2">
                <SearchBar onSearch={performSearch} />
              </div>
              
              {navItems.map((item) => (
                                 <button
                   key={item.name}
                   onClick={() => { 
                     console.log('Navegando para:', item.page);
                     onNavigate && onNavigate(item.page); 
                     closeMenu(); 
                   }}
                   className={`block px-3 py-2 text-base font-medium rounded-md transition-colors focus:outline-none focus:ring-0 focus:bg-transparent dark:focus:bg-transparent ${
                     currentPage === item.page
                       ? "text-purple-600 bg-purple-50 font-semibold"
                       : "text-muted-foreground hover:text-foreground hover:bg-accent"
                   }`}
                   style={{ outline: 'none', boxShadow: 'none' }}
                   type="button"
                 >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Shopping Cart Component */}
      <ShoppingCartComponent />

      {/* Search Results Modal */}
      {isSearching && searchResults.length > 0 && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Resultados da Pesquisa
                </h2>
                                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={closeSearch}
                   className="h-8 w-8"
                 >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {searchResults.length} produto{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(80vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                                 {searchResults.map((product) => (
                   <div
                     key={product.id}
                     onClick={() => navigateToProductCategory(product)}
                     className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                   >
                    <div className="aspect-square rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x300?text=🌵';
                        }}
                      />
                    </div>
                    
                    <h3 className="font-medium text-gray-900 mb-1 truncate">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        }).format(product.price)}
                      </span>
                      
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span className="text-sm text-gray-500">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                        {product.category === 'bouquets' ? 'Buquês' :
                         product.category === 'flowers' ? 'Flores' :
                         product.category === 'indoor' ? 'Interior' :
                         product.category === 'cactus' ? 'Cactos' : product.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
