'use client'

import { useEffect, useState } from 'react'
import images from './images'
import './slider.css'

type Card = {
  id: number
  imgSrc: string
}

export default function Page() {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    // Initialize cards from imported images [^3]
    const newCards = images.map((img, index) => ({
      id: index + 1,
      imgSrc: img,
    }))
    setCards(newCards)

    // Scroll handler applying vertical movement to the slider [^1]
    const handleScroll = () => {
      const scrollPos = window.scrollY
      const slider = document.querySelector('.slider') as HTMLElement | null
      if (!slider) return

      const initialTransform =
        'translate3d(-50%, -50%, 0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)'
      const zOffset = scrollPos * 0.5
      slider.style.transform = `${initialTransform} translateY(${zOffset}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Set initial transform once on mount
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Mouse interactions per card [^1]
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = '15%'
  }

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.left = '0%'
  }

  return (
    <div className="slider" aria-label="3D image slider">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img src={card.imgSrc || "/placeholder.svg"} alt={`Image ${card.id}`} />
        </div>
      ))}
    </div>
  )
}
