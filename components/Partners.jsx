"use client" 
import React from 'react';
import { FaApple, FaGoogle, FaAmazon, FaFacebook, FaTwitter, FaMicrosoft, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';

const logos = [
  <FaApple size={50} />,
  <FaGoogle size={50} />,
  <FaAmazon size={50} />,
  <FaFacebook size={50} />,
  <FaTwitter size={50} />,
  <FaMicrosoft size={50} />,
  <FaSpotify size={50} />,
];

export default function Partners() {
  return (
    <div className="flex flex-col items-center py-12">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-8 text-center">Parceiros</h1>

      {/* Contêiner do carousel */}
      <div className="overflow-hidden w-full">
        {/* Faixa de logos animada */}
        <motion.div
          className="flex space-x-10"
          animate={{ x: ['100%', '-100%'] }} // Movimento da direita para esquerda
          transition={{
            repeat: Infinity,
            duration: 10, // Duração do ciclo completo
            ease: 'linear', // Movimento linear e contínuo
          }}
        >
          {/* Mapear duas vezes para garantir a continuidade visual do loop */}
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
