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

export default function Partners() {
  return (
    <div className="flex flex-col items-center py-12 w-full overflow-hidden">
      {/* Título Centralizado */}
      <h1 className="text-4xl font-bold mb-8 text-center">Parceiros</h1>

      {/* Contêiner do carousel */}
      <div className="relative w-full">
        {/* Faixa de logos animada */}
        <motion.div
          className="flex w-full"
          animate={{ x: ['0%', '-100%'] }} // Movimento contínuo da direita para a esquerda
          transition={{
            repeat: Infinity,
            duration: 30, // Velocidade do movimento
            ease: 'linear', // Movimento suave e contínuo
          }}
        >
          {/* Mapeamos as logos sem duplicá-las na tela */}
          {logos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/7 flex justify-center px-8">
              {logo}
            </div>
          ))}
          {/* Mapeamos as mesmas logos novamente para o loop ser seamless */}
          {logos.map((logo, index) => (
            <div key={index + logos.length} className="flex-shrink-0 w-1/7 flex justify-center px-8">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
