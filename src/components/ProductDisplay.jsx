import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart, Tag, Package, Eye } from "lucide-react";
import { toast } from "sonner";
import { useGlobalContext } from "@/context/GlobalContext";

export default function ProductDisplay() {
  const { products, addToCart, toggleFavorite, isFavorite } =
    useGlobalContext();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    "all",
    "Flores",
    "Buquês",
    "Plantas",
    "Suculentas",
    "Cactos",
  ];

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "sales":
        return b.sales - a.sales;
      case "featured":
      default:
        return b.featured - a.featured;
    }
  });

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToWishlist = (product) => {
    toggleFavorite(product);
  };

  const calculateSalePrice = (originalPrice, salePercentage) => {
    return originalPrice * (1 - salePercentage / 100);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating)
            ? "text-yellow-500 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6 " >
      {/* Filtros e Ordenação */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "outilne" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="text-xs sm:text-sm"
            >
              {category === "all" ? "Todos" : category}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2 ">
          <span className="text-sm font-medium">Ordenar por:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-2 py-1 text-sm dark:bg-gray-800 dark:text-white"
          >
            <option value="featured">Destaques</option>
            <option value="price-low">Menor Preço</option>
            <option value="price-high">Maior Preço</option>
            <option value="rating">Melhor Avaliação</option>
            <option value="sales">Mais Vendidos</option>
          </select>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {sortedProducts.map((product) => (
          <Card
            key={product.id}
            className="group hover:shadow-lg transition-all duration-300 overflow-hidden "
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-42 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/src/imagens/flor1.png";
                }}
              />

              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {product.onSale && (
                  <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    -{product.salePercentage}%
                  </div>
                )}
                {product.featured && (
                  <div className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">
                    <Star className="h-3 w-3 inline mr-1" />
                    Destaque
                  </div>
                )}
              </div>

              {/* Status de Estoque */}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-bold text-center">
                    Fora de Estoque
                  </span>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex flex-col gap-1">
                  <Button
                    variant="secondary"
                    size="sm"
                    className={`h-8 w-8 p-0 ${
                      isFavorite(product.id) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        isFavorite(product.id) ? "fill-current" : ""
                      }`}
                    />
                  </Button>
                  <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="mb-2">
                <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {product.description}
                </p>
              </div>

              {/* Avaliação */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {renderStars(product.rating)}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviews})
                </span>
              </div>

              {/* Preços */}
              <div className="mb-3">
                <div className="flex items-center gap-2">
                  {product.onSale ? (
                    <>
                      <span className="text-lg font-bold text-green-600">
                        R${" "}
                        {calculateSalePrice(
                          product.originalPrice,
                          product.salePercentage
                        )
                          .toFixed(2)
                          .replace(".", ",")}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-bold">
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Package className="h-3 w-3" />
                  <span>{product.category}</span>
                  <span>•</span>
                  <span>{product.sales} vendas</span>
                </div>
              </div>

              {/* Botão de Comprar */}
              <Button
                onClick={() => handleAddToCart(product)}
                disabled={!product.inStock}
                className="w-full"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Adicionar ao Carrinho" : "Fora de Estoque"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros para encontrar o que procura
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
