import React from 'react';
import Carousel from './Carousel'; // Importando o componente de imagens do Carousel

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Carousel ocupando 80% da altura */}
      <div className="absolute inset-0 w-full h-full">
        <Carousel />
      </div>

      {/* Filtro preto com 40% de opacidade */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Texto na parte inferior */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 mt-40">
        <h1 className="text-4xl md:text-6xl font-bold">Preparados para crescer?</h1>
        <p className="mt-4 text-lg md:text-2xl">Nós vamos te ajudar a alcançar o próximo nível de crescimento da sua empresa.</p>
      </div>
    </div>
  );
};

export default HeroSection;
