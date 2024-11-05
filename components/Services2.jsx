"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaHeartbeat, FaHardHat, FaBuilding, FaUsers, FaShieldAlt } from "react-icons/fa";
import './styles.css'; // Certifique-se de que o arquivo CSS está importado corretamente

const servicesData = [
  {
    title: "Seguro Garantia",
    description: "Oferece uma garantia financeira sólida para assegurar o cumprimento de contratos públicos e privados, proporcionando segurança em projetos de construção, fornecimento e prestação de serviços.",
    icon: <FaShieldAlt size={24} />, 
  },
  {
    title: "Risco Engenharia",
    description: "Cobertura abrangente para projetos de engenharia civil, obras e construções, protegendo contra imprevistos que possam comprometer o cronograma ou causar prejuízos financeiros significativos.",
    icon: <FaHardHat size={24} />,
  },
  {
    title: "Responsabilidade Civil",
    description: "Protege sua empresa contra danos involuntários causados a terceiros, garantindo cobertura em casos de lesões corporais, danos materiais ou financeiros, gerando confiança e segurança jurídica.",
    icon: <FaBuilding size={24} />,
  },
  {
    title: "Riscos Nomeados e Operacionais",
    description: "Seguros personalizados para cobrir riscos operacionais e nomeados específicos do seu negócio, garantindo proteção em situações adversas e imprevistas, minimizando impactos financeiros.",
    icon: <FaUsers size={24} />,
  },
  {
    title: "Frota",
    description: "Seguro especializado para cobrir toda a sua frota de veículos, garantindo tranquilidade com a proteção contra acidentes, roubos e outros incidentes que podem ocorrer no transporte de cargas ou passageiros.",
    icon: <FaCar size={24} />,
  },
  {
    title: "Saúde",
    description: "Planos de saúde corporativos desenhados para atender as necessidades de empresas de todos os tamanhos, com cobertura completa para garantir o bem-estar dos colaboradores e suas famílias.",
    icon: <FaHeartbeat size={24} />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -50, scale: 0.8 },
};

export default function Services2() {
  return (
    <div id="seguro-empresarial" className="believe-section flex items-center justify-center py-12">
      <div className="max-w-6xl w-full bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Serviços</h1>
          <p className="text-lg text-gray-600 max-w-sm">Oferecemos soluções de seguro que garantem segurança e confiança.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-left"
              
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ boxShadow: "0px 0px 20px 5px rgba(14, 165, 233, 0.5)" }}
            >
              <motion.div
                className="bg-sky-500 p-2 rounded-lg text-white mb-4"
              >
                {service.icon}
              </motion.div>
              <h1 className="text-xl font-semibold mb-2">{service.title}</h1>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
