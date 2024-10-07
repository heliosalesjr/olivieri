"use client" 
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import heroImage from '../public/img/placeholder2.jpg'

const AnotherHero = () => {
  return (
    <div className="overflow-hidden bg-slate-200 h-[80vh] flex items-center pt-8 sm:pt-16 pb-8 sm:pb-16">
      <div className="container mx-auto px-6 max-w-5xl lg:flex lg:items-center lg:justify-between">
        
        {/* Texto e Botões */}
        <div className="lg:w-5/12 ">
          <h1 className=" mt-32 md:mt-0 text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
            Preparados para crescer?
          </h1>
          <p className="mt-6 text-base text-gray-800 max-w-md">
            Nós vamos te ajudar a alcançar o próximo nível de crescimento da sua empresa.
          </p>

          <div className="mt-8 flex space-x-4">
            <Link href="/start" className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Saiba mais
            </Link>
            <Link href="/learn-more" className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Contato
            </Link>
          </div>
        </div>

        {/* Imagem do Hero */}
        <div className="mt-12 lg:mt-0 lg:w-6/12 lg:text-right mb-16 md:mb-0">
          <div className="relative w-full h-full flex justify-center items-center">
            <div className="w-[500px] aspect-square overflow-hidden rounded-tl-[20%] rounded-br-[20%] rounded-bl-[20%] rounded-tr-none">
              <Image
                src={heroImage}
                alt="Hero Image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnotherHero
