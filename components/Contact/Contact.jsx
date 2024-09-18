"use client" 
import React, { useState } from 'react';
import './contact.css';

export function Contact() {
    const [result, setResult] = useState(null);

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
            setResult("Form Submitted Successfully");
            e.target.reset();  // Reset the form after successful submission
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <>
            <section className="contact">
                <form onSubmit={handleSubmit}>
                    <h2>Fale com a gente</h2>
                    <div className='input-box'>
                        <label>Nome</label>
                        <input type="text" className="field" placeholder="Seu nome" name="name" required />
                    </div>
                    <div className='input-box'>
                        <label>E-mail</label>
                        <input type="email" className="field" placeholder="Seu e-mail" name="email" required />
                    </div>

                    <div className='input-box'>
                        <label>Mensagem</label>
                        <textarea name='message' className="field mess" placeholder="Escreva sua mensagem" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>

                    {result && <p>{result}</p>}
                </form>
            </section>
        </>
    );
}

export default Contact;
