// HeroSectionNivara.jsx
import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import bouquet1 from "../imagens/flor3.png"; // Substitua por imagens reais
import bouquet2 from "../imagens/florAmarelo.png";
import bouquet3 from "../imagens/flor4.png";

// Array com TODO o conteúdo dos slides
const slides = [
  {
    title: "INSPIRAÇÃO PARA CASAMENTOS",
    description:
      "Descubra nossa coleção floral para casamentos e torne seu momento inesquecível.",
    button: "Ver Coleção",
    image: bouquet1,
  },
  {
    title: "SURPREENDA COM AMOR",
    description:
      "Flores que falam por você. Demonstre amor, gratidão ou saudade com estilo.",
    button: "Presentes Especiais",
    image: bouquet2,
  },
  {
    title: "DECORAÇÃO FLORAL ELEGANTE",
    description:
      "Transforme ambientes com buquês sofisticados e cores encantadoras.",
    button: "Ver Decorações",
    image: bouquet3,
  },
];

export default function HeroSectionNivara() {
  const timer = useRef(null);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    created(slider) {
      timer.current = setInterval(() => {
        slider.next();
      }, 4500); // Troca a cada 4,5 segundos
    },
    destroyed() {
      clearInterval(timer.current);
    },
  });

  return (
    <section
      ref={sliderRef}
      className="keen-slider relative min-h-[60vh] overflow-hidden"
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="keen-slider__slide flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 py-16 px-6 md:px-16 rounded-xl"
        >
          {/* Texto */}
          <div className="flex-1 z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-800 dark:text-purple-300 mb-4">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-900 dark:text-purple-200 mb-8">
              {slide.description}
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300">
              {slide.button}
            </button>
          </div>

          {/* Direita: Carrossel de Imagens */}
          <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
            <div className="w-80 h-80 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-xl overflow-hidden  ">
              <img
                src={slide.image}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Bolhas decorativas fixas */}
      <div className="absolute top-10 left-0 w-40 h-40 rounded-full blur-2xl opacity-25 bg-purple-600 dark:bg-purple-700"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full blur-2xl opacity-25 bg-purple-700 dark:bg-purple-800"></div>
    </section>
  );
}
