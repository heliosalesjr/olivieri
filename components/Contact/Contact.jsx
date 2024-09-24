"use client"
import React, { useState } from 'react';
import { FaBolt, FaCheckCircle, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './contact.css';

export function Contact() {
    const [result, setResult] = useState(null);

    const cardsData = [
        { title: 'Empoderamento', description: 'Desenvolvemos autonomia e confiança.', icon: <FaBolt size={24} /> },
        { title: 'Excelência', description: 'Buscamos os melhores resultados.', icon: <FaCheckCircle size={24} /> },
        { title: 'Integridade', description: 'Agimos com ética e transparência.', icon: <FaShieldAlt size={24} /> },
        { title: 'Inovação', description: 'Valorizamos ideias criativas.', icon: <FaLightbulb size={24} /> },
    ];

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Access Key from .env
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Muito obrigado, vagabunda!",
                text: "Sua mensagem foi enviada!",
                icon: "success"
            });
            e.target.reset();  // Reset the form after successful submission
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <>
            <section className="contact-container flex justify-center items-center">
                <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    
                    {/* Primeira coluna com os cards */}
                    <div className="flex flex-col justify-center items-center space-y-6">
                        {cardsData.map((card, index) => (
                            <div key={index} className="flex items-center p-4 border rounded-lg shadow-md bg-white">
                                <div className="text-3xl text-blue-500 mr-4">
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                    <p className="text-gray-600">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Segunda coluna com o formulário */}
                    <div className="flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit} className="space-y-6 w-full">
                            <h2 className="text-2xl font-bold mb-4 text-center">Fale com a gente</h2>
                            <div className='input-box'>
                                <label className="block mb-1">Nome</label>
                                <input type="text" className="field w-full p-2 border rounded-md" placeholder="Seu nome" name="name" required />
                            </div>
                            <div className='input-box'>
                                <label className="block mb-1">E-mail</label>
                                <input type="email" className="field w-full p-2 border rounded-md" placeholder="Seu e-mail" name="email" required />
                            </div>

                            <div className='input-box'>
                                <label className="block mb-1">Mensagem</label>
                                <textarea name='message' className="field w-full p-2 border rounded-md" placeholder="Escreva sua mensagem" required></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Enviar</button>

                            {result && <p className="text-red-500 text-center">{result}</p>}
                        </form>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Contact;
