import { FaBolt, FaCheckCircle, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export default function WhoWeAre() {
  const cardsData = [
    { title: 'Empoderamento', description: 'Desenvolvemos autonomia e confiança.', icon: <FaBolt size={24} /> },
    { title: 'Excelência', description: 'Buscamos os melhores resultados.', icon: <FaCheckCircle size={24} /> },
    { title: 'Integridade', description: 'Agimos com ética e transparência.', icon: <FaShieldAlt size={24} /> },
    { title: 'Inovação', description: 'Valorizamos ideias criativas.', icon: <FaLightbulb size={24} /> },
  ];

  return (
    <div className="bg-slate-600 p-8 ">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Primeira Coluna - Imagem */}
          <div className="flex justify-center items-center">
            <img src="/img/roi.jpg" alt="Imagem da diretora" className="rounded-lg my-4 object-cover h-full w-full" />
          </div>

          {/* Segunda Coluna - Texto */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-white mb-4">Quem lidera</h1>
            <p className='text-sm text-white font-semibold py-4'>Diretora Executiva de Operações</p>
            <p className="text-white mb-6">Rosália Olivieri é uma das referências no mercado de seguros, com mais de 20 anos de experiência consolidada em todo o território nacional. Apaixonada pelo que faz, ela combina conhecimento técnico com uma visão inovadora, sempre focada em entregar soluções personalizadas e eficientes. Sua liderança inspira confiança e traz resultados, tanto para a empresa quanto para seus clientes.</p>
          </div>

          {/* Terceira Coluna - Cards */}
          <div className="grid grid-rows-4 gap-4">
            {cardsData.map((card, index) => (
              <div key={index} className="flex bg-slate-700 p-4 rounded-lg shadow-md">
                {/* Ícone */}
                <div className="bg-slate-500 p-4 rounded-lg flex items-center justify-center mr-4 text-white">
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
    </div>
  );
}
