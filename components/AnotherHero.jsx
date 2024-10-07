"use client" 
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Importa Framer Motion dinamicamente, garantindo que seja carregado apenas no cliente
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false })

import heroImage from '../public/img/placeholder2.jpg'
import Stars from '../public/img/stars.png'

const AnotherHero = () => {
  return (
    <div className="overflow-hidden bg-gray-200 py-20">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        
        {/* Texto e Botões */}
        <div className="lg:w-5/12">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">
              Level Up Your Business
            </h1>
            <p className="mt-6 text-base text-gray-600 max-w-md">
              We provide solutions to elevate your business to the next level. Let’s get started!
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex space-x-4"
          >
            <Link href="/start" className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Get Started
            </Link>
            <Link href="/learn-more" className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
              Learn More
            </Link>
          </MotionDiv>
        </div>

        {/* Imagem do Hero */}
        <MotionDiv
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-0 lg:w-6/12 lg:text-right"
        >
          <div className="relative">
            <Image
              src={heroImage}
              alt="Hero Image"
              className="rounded-lg"
              placeholder="blur"
            />
            <Image
              src={Stars}
              alt="Stars"
              className="absolute top-0 right-0 w-24 opacity-70 hover:opacity-100"
            />
          </div>
        </MotionDiv>
      </div>
    </div>
  )
}

export default AnotherHero
