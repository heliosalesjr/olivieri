"use client";
import React from "react";
import { FaCar, FaHeartbeat, FaHardHat, FaBuilding, FaUsers, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    title: "Seguro Garantia",
    description: "Oferece uma garantia financeira sólida para assegurar o cumprimento de contratos públicos e privados, proporcionando segurança em projetos de construção, fornecimento e prestação de serviços.",
    icon: <FaShieldAlt className="text-green-500 w-8 h-8 mb-4" size={30} />, 
  },
  {
    title: "Risco Engenharia",
    description: "Cobertura abrangente para projetos de engenharia civil, obras e construções, protegendo contra imprevistos que possam comprometer o cronograma ou causar prejuízos financeiros significativos.",
    icon: <FaHardHat className="text-green-500 w-8 h-8 mb-4" size={30} />,
  },
  {
    title: "Responsabilidade Civil",
    description: "Protege sua empresa contra danos involuntários causados a terceiros, garantindo cobertura em casos de lesões corporais, danos materiais ou financeiros, gerando confiança e segurança jurídica.",
    icon: <FaBuilding size={30} className="text-green-500 w-8 h-8 mb-4"/>,
  },
  {
    title: "Riscos Nomeados e Operacionais",
    description: "Seguros personalizados para cobrir riscos operacionais e nomeados específicos do seu negócio, garantindo proteção em situações adversas e imprevistas, minimizando impactos financeiros.",
    icon: <FaUsers size={30} className="text-green-500 w-8 h-8 mb-4"/>,
  },
  {
    title: "Frota",
    description: "Seguro especializado para cobrir toda a sua frota de veículos, garantindo tranquilidade com a proteção contra acidentes, roubos e outros incidentes que podem ocorrer no transporte de cargas ou passageiros.",
    icon: <FaCar size={30} className="text-green-500 w-8 h-8 mb-4"/>,
  },
  {
    title: "Saúde",
    description: "Planos de saúde corporativos desenhados para atender as necessidades de empresas de todos os tamanhos, com cobertura completa para garantir o bem-estar dos colaboradores e suas famílias.",
    icon: <FaHeartbeat size={30} className="text-green-500 w-8 h-8 mb-4"/>,
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          We offer <span className="text-black">quality</span>, with the
          <span className="text-gray-500"> best materials and service</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto  overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  p-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white border-2 border-gray-100 rounded-lg"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
