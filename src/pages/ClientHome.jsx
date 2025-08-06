import React, { useState, useEffect } from "react";
import ProductGrid from "@/components/ProductGrid";
import CategoryFilter from "@/components/CategoryFilter";
import ProductDisplay from "@/components/ProductDisplay";
import { products, categories, getProductsByCategory } from "@/data/products";
import { SpecialOffersCarousel } from "../components/ui/SpecialOffersCarousel";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  ShoppingCart,
} from "lucide-react";
import StatsSection from "@/components/StatsSection";
import ProductViewer from "@/components/ProductViewer";
import HeroSectionNivara from "@/components/HeroSectionNivara";
import Footer from "@/components/Footer";
import ColecaoFitaRoxa from "@/components/ui/ColecaoFitaRoxa";
import { useGlobalContext } from "@/context/GlobalContext";

export default function ClientHome() {
  const { selectedCategory, changeCategory, addToCart } = useGlobalContext();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const productsSectionRef = React.useRef(null);

  // Atualiza produtos filtrados quando a categoria muda
  useEffect(() => {
    const filtered = getProductsByCategory(selectedCategory);
    setFilteredProducts(filtered);

    // Scroll para a seção de produtos se não for "all"
    if (selectedCategory !== "all" && productsSectionRef.current) {
      setTimeout(() => {
        productsSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    changeCategory(categoryId);
  };

  return (
    <div className="space-y-12">
      {/* Hero Principal Nivara */}
      <HeroSectionNivara />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background com gradiente */}
        <div className="absolute inset-0  from-purple-50 via-white to-lavender-50"></div>

        {/* Elementos decorativos */}
        {/* Bolhas decorativas adaptadas ao tema */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl opacity-20 bg-purple-600 dark:bg-white"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl opacity-20 bg-purple-500 dark:bg-white"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Encontre o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                buquê perfeito
              </span>{" "}
              para qualquer ocasião
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Entrega rápida e arranjos personalizados para tornar seus momentos
              especiais ainda mais memoráveis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Ver Coleção
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Personalizar Buquê
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Carrossel de Ofertas Especiais */}
      <section className="py-12 from-purple-50 to-lavender-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex justify-left items-center">
              Ofertas Especiais
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 flex justify-left items-center">
              Aproveite nossos descontos exclusivos por tempo limitado
            </p>
          </div>
          <SpecialOffersCarousel />
        </div>
      </section>

      {/* Destaque de Produto com Visualizador */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex justify-left items-center">
              Produto em Destaque
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 flex justify-left items-center">
              Nossa criação mais popular da temporada
            </p>
          </div>

          <ProductViewer />
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <StatsSection />

      {/* Filtros de Categoria */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold  mb-4 flex justify-left items-center">
              Nossas Categorias
            </h2>
            <p className="text-lg text-gray-00 flex justify-left items-center">
              Encontre o tipo perfeito para sua ocasião
            </p>
          </div>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          {selectedCategory !== "all" && (
            <div className="mt-4 text-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <span className="mr-2">📍</span>
                Visualizando{" "}
                {selectedCategory === "bouquets"
                  ? "Buquês"
                  : selectedCategory === "flowers"
                  ? "Flores"
                  : selectedCategory === "indoor"
                  ? "Plantas de Interior"
                  : selectedCategory === "cactus"
                  ? "Cactos"
                  : selectedCategory}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Grid de Produtos */}
      <section ref={productsSectionRef} className="py-12">
        <div className="px-4 md:px-4 mb-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              {selectedCategory === "all"
                ? "Produtos Recomendados"
                : selectedCategory === "bouquets"
                ? "Buquês"
                : selectedCategory === "flowers"
                ? "Flores"
                : selectedCategory === "indoor"
                ? "Plantas de Interior"
                : selectedCategory === "cactus"
                ? "Cactos"
                : "Produtos"}
            </h2>
            <p className="text-muted-foreground">
              {selectedCategory === "all"
                ? "Nossas flores mais populares"
                : selectedCategory === "bouquets"
                ? "Buquês especiais para ocasiões únicas"
                : selectedCategory === "flowers"
                ? "Flores frescas e vibrantes"
                : selectedCategory === "indoor"
                ? "Plantas perfeitas para decoração"
                : selectedCategory === "cactus"
                ? "Cactos resistentes e charmosos"
                : "Produtos selecionados"}
            </p>
          </div>
        </div>
        <div className="w-full  md:mx-0 px-2 md:px-0 flex justify-center items-center">
          <ProductGrid products={filteredProducts} />
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-16  from-purple-50 to-lavender-50 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Por que escolher a Nivara?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Qualidade, beleza e entrega pontual para seus momentos especiais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌹</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flores Frescas</h3>
              <p className="text-gray-600">
                Selecionamos as melhores flores para garantir frescor e
                durabilidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">
                Entregamos no mesmo dia ou no horário que você preferir.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalização</h3>
              <p className="text-gray-600">
                Criamos arranjos únicos para cada ocasião especial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova Seção de Produtos */}
      <section className="py-16  ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nossos Produtos
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Descubra nossa coleção completa de flores, buquês e plantas
            </p>
          </div>
          <ProductDisplay />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
