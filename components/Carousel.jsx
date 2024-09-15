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
      scale: 1.2, 
      rotate: 10,
      filter: 'blur(10px)' 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      filter: 'blur(0px)' 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      rotate: -10,
      filter: 'blur(10px)' 
    },
  }

  return (
    <Card className="w-full h-full overflow-hidden relative rounded-none bg-sky-800">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            transition={{ duration: 1.2, ease: 'easeInOut' }} // Efeito mais longo e suave
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