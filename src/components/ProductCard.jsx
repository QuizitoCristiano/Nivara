import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useGlobalContext } from "@/context/GlobalContext";

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite, isFavorite: isProductFavorite } = useGlobalContext();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleFavoriteToggle = () => {
    toggleFavorite(product);
  };

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    // Simular delay de adição ao carrinho
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAddingToCart(false);
    
    addToCart(product);
  };

  return (
    <div className="bg-card border border-gray-200 rounded-none md:rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Imagem do Produto */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Botão de Favorito */}
        <button
          onClick={handleFavoriteToggle}
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <Heart
            className={`h-4 w-4 ${
              isProductFavorite(product.id) ? "fill-purple-600 text-purple-600" : "text-gray-600"
            }`}
          />
        </button>

        {/* Badge de Desconto (se houver) */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Informações do Produto */}
      <div className="p-3 md:p-4 space-y-2 md:space-y-3">
        {/* Nome e Avaliação */}
        <div className="flex items-start justify-between">
          <h3 className="font-medium text-card-foreground line-clamp-2 flex-1 text-sm md:text-base">
            {product.name}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-muted-foreground">{product.rating}</span>
          </div>
        </div>

        {/* Preço */}
        <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg font-bold text-primary">
          R$ {typeof product.price === 'number' ? product.price.toFixed(2).replace('.', ',') : product.price}
        </span>
          {product.originalPrice && (
            <span className="text-xs md:text-sm text-muted-foreground line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        {/* Botão Adicionar ao Carrinho */}
        <Button
          onClick={handleAddToCart}
          disabled={isAddingToCart}
          className="w-full text-xs md:text-sm py-2 md:py-2"
          size="sm"
        >
          {isAddingToCart ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              Adicionando...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Comprar
            </div>
          )}
        </Button>
      </div>
    </div>
  );
} 