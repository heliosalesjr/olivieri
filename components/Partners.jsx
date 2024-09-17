"use client" 
import React from 'react';
import { FaApple, FaGoogle, FaAmazon, FaFacebook, FaTwitter, FaMicrosoft, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';

const logos = [
  <FaApple size={60} />,
  <FaGoogle size={60} />,
  <FaAmazon size={60} />,
  <FaFacebook size={60} />,
  <FaTwitter size={60} />,
  <FaMicrosoft size={60} />,
  <FaSpotify size={60} />,
];

export default function LogoCarousel() {
  return (
    <div className="flex flex-col items-center py-12 w-full overflow-hidden">
      {/* Título Centralizado */}
      <h1 className="text-4xl font-bold mb-8 text-center py-8 pb-8">Parceiros</h1>

      {/* Contêiner do carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Faixa de logos animada */}
        <motion.div
          className="flex"
          animate={{ x: ['0%', '-100%'] }} // Movimento contínuo da direita para a esquerda
          transition={{
            repeat: Infinity,
            duration: 20, // Ajuste para garantir que o movimento seja lento e contínuo
            ease: 'linear',
          }}
        >
          {/* Mapeamos as logos e as duplicamos para criar um loop sem interrupções */}
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[14.28%] flex justify-center px-6">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
