"use client" 
import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaHeartbeat, FaHardHat, FaBuilding, FaUsers, FaShieldAlt } from 'react-icons/fa';

const servicesData = [
  {
    title: 'Seguro Garantia',
    description: 'Garantia financeira para seus projetos.',
    icon: <FaShieldAlt size={40} />,
  },
  {
    title: 'Risco Engenharia',
    description: 'Cobertura para obras e engenharia civil.',
    icon: <FaHardHat size={40} />,
  },
  {
    title: 'Responsabilidade Civil',
    description: 'Proteção para riscos de responsabilidade.',
    icon: <FaBuilding size={40} />,
  },
  {
    title: 'Riscos Nomeados e Operacionais',
    description: 'Cobertura para riscos específicos e operacionais.',
    icon: <FaUsers size={40} />,
  },
  {
    title: 'Frota',
    description: 'Seguro especializado para sua frota de veículos.',
    icon: <FaCar size={40} />,
  },
  {
    title: 'Saúde',
    description: 'Planos de saúde personalizados para sua empresa.',
    icon: <FaHeartbeat size={40} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Título centralizado */}
      <h1 className="text-4xl font-bold mb-10 text-center">Serviços</h1>

      {/* Grid de cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 lg:px-24">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Ícone */}
            <div className="mb-4 text-green-500">{service.icon}</div>
            {/* Título */}
            <h1 className="text-2xl font-semibold mb-2">{service.title}</h1>
            {/* Descrição */}
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}