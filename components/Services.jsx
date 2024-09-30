"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaHeartbeat, FaHardHat, FaBuilding, FaUsers, FaShieldAlt } from "react-icons/fa";

const servicesData = [
  {
    title: "Seguro Garantia",
    description: "Oferece uma garantia financeira sólida para assegurar o cumprimento de contratos públicos e privados, proporcionando segurança em projetos de construção, fornecimento e prestação de serviços.",
    icon: <FaShieldAlt size={30} />, // Ícones menores
  },
  {
    title: "Risco Engenharia",
    description: "Cobertura abrangente para projetos de engenharia civil, obras e construções, protegendo contra imprevistos que possam comprometer o cronograma ou causar prejuízos financeiros significativos.",
    icon: <FaHardHat size={30} />,
  },
  {
    title: "Responsabilidade Civil",
    description: "Protege sua empresa contra danos involuntários causados a terceiros, garantindo cobertura em casos de lesões corporais, danos materiais ou financeiros, gerando confiança e segurança jurídica.",
    icon: <FaBuilding size={30} />,
  },
  {
    title: "Riscos Nomeados e Operacionais",
    description: "Seguros personalizados para cobrir riscos operacionais e nomeados específicos do seu negócio, garantindo proteção em situações adversas e imprevistas, minimizando impactos financeiros.",
    icon: <FaUsers size={30} />,
  },
  {
    title: "Frota",
    description: "Seguro especializado para cobrir toda a sua frota de veículos, garantindo tranquilidade com a proteção contra acidentes, roubos e outros incidentes que podem ocorrer no transporte de cargas ou passageiros.",
    icon: <FaCar size={30} />,
  },
  {
    title: "Saúde",
    description: "Planos de saúde corporativos desenhados para atender as necessidades de empresas de todos os tamanhos, com cobertura completa para garantir o bem-estar dos colaboradores e suas famílias.",
    icon: <FaHeartbeat size={30} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 }, // Efeito mais dramático na entrada
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.8 },
};

export default function Services() {
  return (
    <div id="seguro-empresarial" className="flex flex-col items-center justify-center py-12 bg-slate-100">
      {/* Título centralizado */}
      <h1 className="text-4xl font-bold mb-10 text-center">Serviços</h1>
      <div className="max-w-7xl mx-auto">
        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 lg:px-24 mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-start text-left transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ aspectRatio: '1/1' }} // Mantendo a proporção quadrada
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.8, delay: index * 0.2 }} // Transição mais lenta para mais drama
              whileHover={{ scale: 1.05 }} // Sutil crescimento no hover
            >
              {/* Ícone dentro do retângulo */}
              <motion.div
                className="bg-sky-500 p-2 rounded-lg text-white mb-6 transition-all duration-300"
                whileHover={{ scale: 1.2 }} // Ícone aumenta no hover
              >
                {service.icon}
              </motion.div>
              {/* Título */}
              <h1 className="text-2xl font-semibold mb-4">{service.title}</h1>
              {/* Descrição (texto mais detalhado) */}
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
