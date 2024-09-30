"use client";
import React from "react";
import { FaBolt, FaCheckCircle, FaLightbulb, FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export function Believe() {
  const cardsData = [
    {
      title: "Empoderamento",
      description:
        "Desenvolvemos autonomia e confiança, promovendo uma cultura onde as pessoas têm o poder de tomar decisões e criar mudanças positivas em suas vidas e nas organizações.",
      icon: <FaBolt size={24} />,
    },
    {
      title: "Excelência",
      description:
        "Estamos comprometidos com a busca constante por qualidade e desempenho, oferecendo soluções que superam as expectativas e agregam valor contínuo aos nossos clientes.",
      icon: <FaCheckCircle size={24} />,
    },
    {
      title: "Integridade",
      description:
        "Agimos com ética e transparência em todas as nossas relações, garantindo que a confiança seja a base de todas as nossas interações e decisões.",
      icon: <FaShieldAlt size={24} />,
    },
    {
      title: "Inovação",
      description:
        "Valorizamos ideias criativas e novas abordagens, incentivando a exploração de possibilidades que podem transformar o futuro e gerar benefícios sustentáveis.",
      icon: <FaLightbulb size={24} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center py-12" style={{ maxWidth: "5xl" }}>
      {/* Primeira Coluna - Título, Parágrafo e Botão */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-sky-600">No que acreditamos</h1>
        <p className="text-lg text-gray-700">
            Acreditamos em valores que moldam a nossa cultura e criam um ambiente de confiança, inovação e excelência.
        </p>
        <button className="flex items-center bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition">
            Saiba mais <FaArrowRight className="ml-2" />
        </button>
        </div>

      {/* Segunda Coluna - Cards */}
      <div className="flex flex-col w-full md:w-1/2 space-y-8 p-8">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-slate-100 shadow-lg rounded-lg p-6 flex items-center space-x-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={cardVariants}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Ícone dentro de um quadrado com bordas arredondadas */}
            <div className="flex-shrink-0 bg-sky-500 p-4 rounded-lg text-white">
              {card.icon}
            </div>
            {/* Título e Descrição */}
            <div>
              <h3 className="text-xl font-semibold text-sky-600">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Believe;
