"use client";

import { FaBullhorn, FaBalanceScale, FaRobot, FaDollarSign, FaPencilRuler, FaCog } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesAlt = () => {
  return (
    <section className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white max-w-7xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4">
          Serviços Planejados para seu Negócio
        </h2>
        <p className="text-lg font-light text-white/80 max-w-2xl mx-auto">
          Com o seguro garantia, seus projetos ganham mais segurança e credibilidade, garantindo o cumprimento de contratos e proteção financeira em negociações.
        </p>
      </div>
      <motion.div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        {[
          { icon: <FaBullhorn className="w-8 h-8 text-white" />, title: "Seguro Garantia", text: "Oferece uma garantia financeira sólida para assegurar o cumprimento de contratos..." },
          { icon: <FaBalanceScale className="w-8 h-8 text-white" />, title: "Risco Engenharia", text: "Cobertura para projetos de engenharia civil, obras e construções..." },
          { icon: <FaRobot className="w-8 h-8 text-white" />, title: "Responsabilidade Civil", text: "Protege sua empresa contra danos involuntários causados a terceiros..." },
          { icon: <FaDollarSign className="w-8 h-8 text-white" />, title: "Riscos Nomeados e Operacionais", text: "Seguros personalizados para cobrir riscos operacionais e específicos..." },
          { icon: <FaPencilRuler className="w-8 h-8 text-white" />, title: "Frota", text: "Seguro especializado para cobrir toda a sua frota de veículos..." },
          { icon: <FaCog className="w-8 h-8 text-white" />, title: "Saúde", text: "Planos de saúde corporativos desenhados para atender empresas..." },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white text-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <motion.div
              className="flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 mb-6"
              whileHover={{ scale: 1.2 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesAlt;
