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

  return (
    <Card className="w-full h-full overflow-hidden relative rounded-none">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
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