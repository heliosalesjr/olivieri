'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@nextui-org/react'
import Image from 'next/image'

const images = [
  '/img/placeholder2.jpg',
  '/img/placeholder3.jpg',
  '/img/placeholder4.jpg',
  '/img/placeholder5.jpg',
  '/img/blowtorch.jpg'
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const transitionVariants = {
    initial: { 
      opacity: 0, 
      x: '-100%',  // Vindo da esquerda
      rotate: -45, // Rotação gráfica acentuada
      scale: 0.8, 
      filter: 'brightness(0.5) contrast(2) saturate(2)' // Efeitos visuais fortes
    },
    animate: { 
      opacity: 1, 
      x: 0,       // Centralizado
      rotate: 0,  // Rotação ajustada
      scale: 1, 
      filter: 'brightness(1) contrast(1) saturate(1)'  // Efeito gráfico ajustado
    },
    exit: { 
      opacity: 0, 
      x: '100%',  // Saindo para a direita
      rotate: 45, // Rotação gráfica
      scale: 1.2, 
      filter: 'brightness(0.5) contrast(2) saturate(2)' // Forte ao sair
    },
  }

  return (
    <Card className="w-full h-full overflow-hidden relative rounded-none">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            transition={{ duration: 1, ease: 'easeInOut' }}  // Transição rápida e gráfica
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  )
}
