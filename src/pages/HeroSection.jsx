




import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const offersr = [
  {
    id: 1,
    badge: "Oferta Limitada",
    title: "Oferta Especial",
    subtitle: "Até",
    discount: "20",
    buttonText: "Comprar Agora",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop&crop=face",
    gradient: "from-purple-50 to-pink-50",
  },
  {
    id: 2,
    badge: "Promoção",
    title: "Buquês Exclusivos",
    subtitle: "Desconto de",
    discount: "30",
    buttonText: "Ver Ofertas",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    gradient: "from-blue-50 to-purple-50",
  },
  {
    id: 3,
    badge: "Novidade",
    title: "Flores Premium",
    subtitle: "Economia de",
    discount: "25",
    buttonText: "Reservar",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&h=300&fit=crop",
    gradient: "from-pink-50 to-rose-50",
  },
];

export function lelll() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Flores em Destaque</h2>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
          Ver todas →
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slides Container */}
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {offers.map((offer) => (
              <div key={offer.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${offer.gradient} p-6 md:p-8 rounded-2xl shadow-lg border border-white/20`}>
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                        {offer.badge}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        {offer.title}
                      </h3>
                      
                      {/* Discount */}
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                        <span className="text-lg text-muted-foreground">{offer.subtitle}</span>
                        <div className="flex items-center">
                          <span className="text-4xl md:text-5xl font-bold text-primary">{offer.discount}</span>
                          <span className="text-2xl md:text-3xl font-bold text-primary">%</span>
                        </div>
                      </div>
                      
                      {/* Button */}
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                      >
                        {offer.buttonText}
                      </Button>
                    </div>
                    
                    {/* Image */}
                    <div className="flex-1 flex justify-center">
                      <div className="relative">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-white/20">
                          <img 
                            src={offer.image} 
                            alt={offer.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-20"></div>
                        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? "bg-primary scale-110" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
} 























import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Footer from "@/components/Footer";

const offers = [
  {
    id: 1,
    badge: "Oferta Limitada",
    title: "Oferta Especial",
    subtitle: "Até",
    discount: "40",
    disclaimer: "Todos os Serviços Disponíveis | T&C Aplicados",
    buttonText: "Resgatar",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    badge: "Promoção Flash",
    title: "Desconto Exclusivo",
    subtitle: "Economia de",
    discount: "50",
    disclaimer: "Flores Premium | Estoque Limitado",
    buttonText: "Resgatar",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    badge: "Preço Especial",
    title: "Desconto Incrível",
    subtitle: "Ganhe",
    discount: "35",
    disclaimer: "Buquês Frescos | Entrega Grátis",
    buttonText: "Resgatar",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face",
  },
];

export function SpecialOffersCarousell() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Flores em Destaque</h2>
        </div>
        <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
          Ver todas →
        </button>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background text-foreground hover:text-primary p-2 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm border border-gray-200"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background text-foreground hover:text-primary p-2 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm border border-gray-200"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slides Container */}
        <div className="overflow-hidden rounded-ful">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {offers.map((offer) => (
              <div key={offer.id} className="w-full flex-shrink-0">
                <div className="bg-gradient-to-r from-primary/20 via-primary/15 to-primary/10 p-6 md:p-8 rounded-full shadow-sm border border-primary/30 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
                  
                  <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Left Section - Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-4">
                        {offer.badge}
                      </div>
                      
                      {/* Main Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                        {offer.title}
                      </h3>
                      
                      {/* Discount */}
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                        <span className="text-lg text-muted-foreground">{offer.subtitle}</span>
                        <div className="flex items-center">
                          <span className="text-5xl md:text-6xl font-bold text-primary">{offer.discount}</span>
                          <span className="text-3xl md:text-4xl font-bold text-primary">%</span>
                        </div>
                      </div>
                      
                      {/* Disclaimer */}
                      <p className="text-sm text-muted-foreground mb-6">
                        {offer.disclaimer}
                      </p>
                    </div>
                    
                    {/* Right Section - Image and Button */}
                    <div className="flex-1 flex flex-col items-center gap-4">
                      {/* Image */}
                      <div className="relative">
                        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-primary/20">
                          <img 
                            src={offer.image} 
                            alt={offer.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent"></div>
                      </div>
                      
                      {/* Button */}
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 border-0"
                      >
                        {offer.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator - Centered */}
      <div className="flex justify-center mt-6 gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? "bg-primary scale-110" 
                : "bg-muted hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
} 
