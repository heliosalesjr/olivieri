"use client"; // Adicione isso no topo do arquivo

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  // Lista de imagens para o carrossel
  const images = [
    "/img/placeholder2.jpg",
    "/img/placeholder3.jpg",
    "/img/placeholder4.jpg",
    "/img/placeholder5.jpg",
    "/img/blowtorch.jpg",
  ];

  // Estado para a imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para trocar a imagem a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a imagem a cada 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, [images.length]);

  return (
    <section className="relative h-[80vh] w-full">
      {/* Carrossel de Imagens */}
      <div className="absolute inset-0">
        <motion.div
          key={currentImageIndex} // O framer-motion detecta a troca com base na key
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Suave transição de fade in/out
        />
      </div>

      {/* Overlay (Camada preta com opacidade) */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mr-16">
            {/* Coluna 1: Texto */}
            <div className="text-white max-w-5xl ms-auto ">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                Preparados para crescer?
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
Nós vamos te ajudar a alcançar o próximo nível de crescimento da sua empresa.              </motion.p>
              <motion.button
                className="bg-sky-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg inline-flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                saiba mais
              </motion.button>
            </div>

            {/* Coluna 2: Espaço vazio para visual balance */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
