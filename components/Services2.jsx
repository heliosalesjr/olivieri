"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCar, FaHeartbeat, FaHardHat, FaBuilding, FaUsers, FaShieldAlt } from "react-icons/fa";

// Dados dos serviços, agora com campo de imagem
const servicesData = [
  {
    title: "Seguro Garantia",
    description: "Oferece uma garantia financeira sólida para assegurar o cumprimento de contratos públicos e privados, proporcionando segurança em projetos de construção, fornecimento e prestação de serviços.",
    icon: <FaShieldAlt size={48} />,
    image: "img/group/.jpg",
  },
  {
    title: "Risco Engenharia",
    description: "Cobertura abrangente para projetos de engenharia civil, obras e construções, protegendo contra imprevistos que possam comprometer o cronograma ou causar prejuízos financeiros significativos.",
    icon: <FaHardHat size={48} />,
    image: "img/group.jpg",
  },
  {
    title: "Responsabilidade Civil",
    description: "Protege sua empresa contra danos involuntários causados a terceiros, garantindo cobertura em casos de lesões corporais, danos materiais ou financeiros, gerando confiança e segurança jurídica.",
    icon: <FaBuilding size={48} />,
    image: "img/group.jpg",
  },
  {
    title: "Riscos Nomeados e Operacionais",
    description: "Seguros personalizados para cobrir riscos operacionais e nomeados específicos do seu negócio, garantindo proteção em situações adversas e imprevistas, minimizando impactos financeiros.",
    icon: <FaUsers size={48} />,
    image: "img/group.jpg",
  },
  {
    title: "Frota",
    description: "Seguro especializado para cobrir toda a sua frota de veículos, garantindo tranquilidade com a proteção contra acidentes, roubos e outros incidentes que podem ocorrer no transporte de cargas ou passageiros.",
    icon: <FaCar size={48} />,
    image: "img/group.jpg",
  },
  {
    title: "Saúde",
    description: "Planos de saúde corporativos desenhados para atender as necessidades de empresas de todos os tamanhos, com cobertura completa para garantir o bem-estar dos colaboradores e suas famílias.",
    icon: <FaHeartbeat size={48} />,
    image: "img/group.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export default function ServicesWithCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextCard, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 py-20 px-6 max-w-7xl mx-auto">
      {/* Texto */}
      <div className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold leading-tight mb-6">
          Serviços Planejados para seu Negócio
        </h2>
        <p className="text-lg font-light text-slate-700 max-w-xl">
          Com o seguro garantia, seus projetos ganham mais segurança e credibilidade, garantindo o cumprimento de contratos e proteção financeira em negociações, e ainda temos muitos outros serviços.
        </p>
      </div>

      {/* Carrossel */}
      <div className="lg:w-1/2 w-full relative bg-slate-200 p-6 rounded-xl shadow-lg flex flex-col items-center justify-start">
        {/* Título */}
        <h1 className="w-full text-left text-2xl font-bold text-slate-700 mb-4">
          Mais alternativas
        </h1>

        {/* Navegação */}
        <button
          onClick={prevCard}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-slate-200"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextCard}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg z-10 hover:bg-slate-200"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Cards */}
        <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden w-full h-full"
            >
              {/* Metade de cima */}
              <div className="relative h-1/2 w-full">
                <img
                  src={servicesData[currentIndex].image}
                  alt={servicesData[currentIndex].title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="bg-white rounded-full p-4">
                    {servicesData[currentIndex].icon}
                  </div>
                </div>
              </div>

              {/* Metade de baixo */}
              <div className="h-1/2 w-full p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-semibold text-slate-700 mb-2">
                  {servicesData[currentIndex].title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {servicesData[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
