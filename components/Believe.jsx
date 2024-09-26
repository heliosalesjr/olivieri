"use client"
import React from 'react';
import { FaBolt, FaCheckCircle, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

export function Believe() {

    const cardsData = [
        {
            title: 'Empoderamento',
            description: 'Desenvolvemos autonomia e confiança, promovendo uma cultura onde as pessoas têm o poder de tomar decisões e criar mudanças positivas em suas vidas e nas organizações.',
            icon: <FaBolt size={24} />
        },
        {
            title: 'Excelência',
            description: 'Estamos comprometidos com a busca constante por qualidade e desempenho, oferecendo soluções que superam as expectativas e agregam valor contínuo aos nossos clientes.',
            icon: <FaCheckCircle size={24} />
        },
        {
            title: 'Integridade',
            description: 'Agimos com ética e transparência em todas as nossas relações, garantindo que a confiança seja a base de todas as nossas interações e decisões.',
            icon: <FaShieldAlt size={24} />
        },
        {
            title: 'Inovação',
            description: 'Valorizamos ideias criativas e novas abordagens, incentivando a exploração de possibilidades que podem transformar o futuro e gerar benefícios sustentáveis.',
            icon: <FaLightbulb size={24} />
        },
    ];

    return (
        <section className="relative flex justify-center items-center" style={{ minHeight: "100vh" }}>
            
            {/* Imagem de fundo */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('img/hands.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            />

            {/* Camada de cor com opacidade, entre a imagem e os cards */}
            <div className="absolute inset-0 bg-sky-800 opacity-40 z-10"></div>

            {/* Conteúdo dos cards */}
            <div id="contato" className="relative z-20 max-w-5xl w-full mx-auto p-6">
                <h1 className="text-5xl font-bold text-center mb-8 text-white">No que acreditamos</h1>

                {/* Distribuição alternada dos cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className={`flex items-center p-6 bg-white bg-opacity-80 rounded-lg shadow-md 
                                        ${index % 2 === 0 ? 'justify-self-start' : 'justify-self-end'}
                            `}
                        >
                            <div className="flex items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 flex">
                                        <span className='text-sky-500 pr-2'>{card.icon}</span>
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Believe;
