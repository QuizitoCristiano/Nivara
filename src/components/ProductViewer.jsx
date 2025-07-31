import React, { useState } from 'react';
import { Button } from './ui/button';
import { Heart, Play } from 'lucide-react';
import floDeCasaRoxo from "../imagens/floDeCasaRoxo.png"
import florRoxoErosa from "../imagens/florRoxoErosa.png";

const ProductViewer = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    {
      id: 1,
      src: floDeCasaRoxo,
      alt: "Buquê de tulipas brancas e jacintos roxos - Vista frontal"
    },
    {
      id: 2,
      src: florRoxoErosa,
      alt: "Buquê de tulipas brancas e jacintos roxos - Vista lateral"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=600&h=600&fit=crop&crop=center",
      alt: "Buquê de tulipas brancas e jacintos roxos - Vista superior"
    },
  
    {
      id: 4,
      type: "video",
      src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=600&fit=crop&crop=center",
      alt: "Vídeo do buquê"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Coluna da Imagem */}
        <div className="space-y-6">
          {/* Imagem Principal */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Badge de Desconto */}
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  -25%
                </span>
              </div>
              
              {/* Botão Favorito */}
              <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
              </button>
            </div>
          </div>

          {/* Miniaturas e Indicador */}
          <div className="space-y-4">
            {/* Indicador Ativo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-1 bg-gray-200 rounded-full"></div>
                <div 
                  className="absolute top-0 left-0 h-1 bg-purple-600 rounded-full transition-all duration-300"
                  style={{ width: `${((activeImage + 1) / images.length) * 100}%` }}
                ></div>
                <div 
                  className="absolute top-0 w-3 h-3 bg-purple-600 rounded-full -mt-1 transition-all duration-300"
                  style={{ left: `${((activeImage + 1) / images.length) * 100 - 6}%` }}
                ></div>
              </div>
            </div>

            {/* Miniaturas */}
            <div className="flex justify-center space-x-3">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setActiveImage(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    activeImage === index 
                      ? 'border-purple-600 shadow-lg' 
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {image.type === "video" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna das Informações */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Buquê Elegante de Tulipas
            </h3>
            <p className="text-purple-600 font-semibold text-lg mb-4">
              Tulipas Brancas e Jacintos Roxos
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                R$ 89,90
              </span>
              <span className="text-xl text-gray-500 line-through">
                R$ 119,90
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Disponível para entrega hoje
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Entrega em até 2 horas
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Flores 100% frescas
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantidade:
                </label>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                
                  <option>4</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button 
                size="lg" 
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold"
              >
                Comprar
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50 py-3 rounded-xl font-semibold"
              >
                Comprar Agora
              </Button>
            </div>
          </div>

          <div className="border-t pt-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Descrição
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Este buquê elegante combina a pureza das tulipas brancas com a beleza vibrante dos jacintos roxos. 
              Perfeito para aniversários, comemorações especiais ou simplesmente para demonstrar carinho. 
              Cada buquê é cuidadosamente selecionado e arranjado à mão para garantir a máxima qualidade e beleza.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductViewer; 