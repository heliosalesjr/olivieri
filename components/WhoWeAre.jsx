import { FaBolt, FaCheckCircle, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export default function WhoWeAre() {
  const cardsData = [
    { title: 'Empoderamento', description: 'Desenvolvemos autonomia e confiança.', icon: <FaBolt size={24} /> },
    { title: 'Excelência', description: 'Buscamos os melhores resultados.', icon: <FaCheckCircle size={24} /> },
    { title: 'Integridade', description: 'Agimos com ética e transparência.', icon: <FaShieldAlt size={24} /> },
    { title: 'Inovação', description: 'Valorizamos ideias criativas.', icon: <FaLightbulb size={24} /> },
  ];

  return (
    <div className="bg-slate-600 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Primeira Coluna */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">Nossos Valores</h1>
          <p className="text-slate-200 mb-6">Promovemos os princípios que orientam nossas ações e decisões.</p>
          <button className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors">
            Saiba mais
          </button>
        </div>

        {/* Segunda Coluna */}
        <div className="grid grid-rows-4 gap-4">
          {cardsData.map((card, index) => (
            <div key={index} className="flex bg-slate-700 p-4 rounded-lg shadow-md">
              {/* Ícone */}
              <div className="bg-slate-500 p-2 rounded-full flex items-center justify-center mr-4">
                {card.icon}
              </div>
              {/* Conteúdo do card */}
              <div>
                <h2 className="text-lg font-bold text-white">{card.title}</h2>
                <p className="text-slate-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
