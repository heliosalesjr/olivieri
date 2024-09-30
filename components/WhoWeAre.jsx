"use client";
import { FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhoWeAre() {

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rosalia-olivieri", '_blank');
  };

  return (
    <div className="bg-slate-600 p-8" id="beneficios">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Primeira Coluna - Imagem */}
          <motion.div className="relative flex justify-center items-center overflow-hidden">
            <motion.img
              src="/img/roi3.jpeg"
              alt="Imagem da diretora"
              className="rounded-xl object-cover w-full m-4"
              style={{ maxHeight: '600px', objectFit: 'cover' }}
              initial={{ scale: 1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              whileHover={{ scale: 1.2 }} // Aplica zoom apenas no conteúdo da imagem
            />

            {/* Botão com o ícone do LinkedIn */}
            <motion.button
              onClick={handleLinkedInClick}
              className="absolute bottom-4 m-4 right-4 bg-sky-400 rounded-xl p-3 hover:bg-sky-300 transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <FaLinkedin size={24} color="white" />
            </motion.button>
          </motion.div>

          {/* Segunda Coluna - Texto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl text-slate-200 mb-4 font-black">Quem lidera</h2>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-slate-200 via-purple-200">Rosália Olivieri</h1>

            {/* Label como um destaque */}
            <p className='text-white font-black py-2 px-4 bg-sky-500 rounded-lg inline-block mt-4 mb-6 w-max'>
              Diretora Executiva de Operações
            </p>

            <p className="text-white mb-6">Rosália Olivieri é uma das referências no mercado de seguros, com mais de 25 anos de experiência consolidada em todo o território nacional. Apaixonada pelo que faz, ela combina conhecimento técnico com uma visão inovadora, sempre focada em entregar soluções personalizadas e eficientes. Sua liderança inspira confiança e traz resultados, tanto para a empresa quanto para seus clientes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
