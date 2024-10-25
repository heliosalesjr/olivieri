"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import heroImage1 from "../public/img/blowtorch.jpg";
import heroImage2 from "../public/img/placeholder2.jpg";
import heroImage3 from "../public/img/placeholder3.jpg";
import heroImage4 from "../public/img/placeholder4.jpg";
import heroImage5 from "../public/img/placeholder5.jpg";

const AnotherHero = () => {
  const images = [heroImage1, heroImage2, heroImage3, heroImage4, heroImage5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden bg-slate-200 h-[80vh] flex items-center pt-8 sm:pt-16 pb-8 sm:pb-16">
      <div className="container mx-auto px-6 max-w-5xl lg:flex lg:items-center lg:justify-between">
        
        {/* Texto e Botões */}
        <div className="lg:w-5/12">
          <motion.h1
            className="mt-32 md:mt-0 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Preparados para crescer?
          </motion.h1>
          <motion.p
            className="mt-6 text-base text-gray-800 max-w-md"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Nós vamos te ajudar a alcançar o próximo nível de crescimento da sua empresa.
          </motion.p>

          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link href="/start" className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Saiba mais
            </Link>
            <Link href="/learn-more" className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Contato
            </Link>
          </motion.div>
        </div>

        {/* Carrossel de Imagens com Bordas */}
        <div className="mt-12 lg:mt-0 lg:w-6/12 lg:text-right mb-16 md:mb-0">
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Adicionando bordas arredondadas apenas no container interno */}
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-[500px] aspect-square overflow-hidden rounded-tl-[25%] rounded-br-[25%] rounded-bl-[25%]"
            >
              <Image
                src={images[currentImageIndex]}
                alt="Hero Image"
                className="object-cover w-full h-full"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherHero;
