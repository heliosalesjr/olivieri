"use client" 
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "./believe.css";

export function Believe() {
  const cardsData = [
    {
      title: "Empoderamento",
      description:
        "Desenvolvemos autonomia e confiança, promovendo uma cultura onde as pessoas têm o poder de tomar decisões e criar mudanças positivas em suas vidas e nas organizações.",
    },
    {
      title: "Excelência",
      description:
        "Estamos comprometidos com a busca constante por qualidade e desempenho, oferecendo soluções que superam as expectativas e agregam valor contínuo aos nossos clientes.",
    },
    {
      title: "Integridade",
      description:
        "Agimos com ética e transparência em todas as nossas relações, garantindo que a confiança seja a base de todas as nossas interações e decisões.",
    },
    {
      title: "Inovação",
      description:
        "Valorizamos ideias criativas e novas abordagens, incentivando a exploração de possibilidades que podem transformar o futuro e gerar benefícios sustentáveis.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <section className="believe-section bg-light-gray py-16 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
        
        {/* Primeira Coluna - Título, Parágrafo e Botão */}
        <div className="flex flex-col justify-center items-center text-center md:w-1/2">
          <h1 className="text-5xl font-extrabold mb-4 text-slate-700 ">No que acreditamos</h1>
          <p className="text-lg mb-6 max-w-md text-gray-900">
            Acreditamos em valores que moldam a nossa cultura e criam um ambiente de confiança, inovação e excelência.
          </p>
          <button className="flex items-center bg-yellow-500 text-gray-800 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition">
            Saiba mais <FaArrowRight className="ml-2" />
          </button>
        </div>

        {/* Segunda Coluna - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-1/2 p-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={index}
              className="card bg-white text-gray-800 shadow-xl rounded-lg p-6 flex flex-col justify-center transition-transform duration-300 hover:scale-105"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Título com underline colorido */}
              <h3 className="card-title text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Believe;
