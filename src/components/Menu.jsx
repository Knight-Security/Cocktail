import React, { useRef } from 'react'
import gsap from 'gsap'
import { allCocktails } from '../../constants'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
const Menu = () => {
        useGSAP(()=>{
            gsap.fromTo( '#title',
            {
                opacity:0
            },
            {
                opacity:1,
                duration:1
            })
            gsap.fromTo( '#title',
            {
                opacity:0
            },
            {
                opacity:1,
                duration:1
            })
        },[currentIndex])
    const contentRef= useRef()
    const [currentIndex, setcurrentIndex] = useState(0)
    const totalCocktail=allCocktails.length
    const goToSlide=(index)=>{
        const newIndex=(index+totalCocktail)%totalCocktail;
        setcurrentIndex(newIndex)
    }
    const getCocktailAt=(indexOffset)=>{
            return allCocktails[(currentIndex+indexOffset+totalCocktail)%totalCocktail]
    }
    const currentCocktail=getCocktailAt(0);
    const prevCocktail=getCocktailAt(-1);
    const nextCocktail=getCocktailAt(1);
  return (
    
    <div>
      <section id='menu' aria-labelledby='menu-heading'>
        <img src="/image/slider-left-leaf.png" alt="left-leaf" id='m-left-leaf' />
        <img src="/image/slider-right-leaf.png" alt="right-leaf" id='m-right-leaf' />
        <h2 id='menu-heading' className='sr-only'>
            Cocktail Menu
        </h2>
        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
            {allCocktails.map((cocktail,index)=>{
                const isActive= index===currentIndex
                return (
                    <button key={cocktail.id} className={`${isActive ? 'text-white border-white ':'text-white/50 border-white/50'}`}
                    onClick={()=>goToSlide(index)}
                    >
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>
        <div className="content">
            <div className="arrows">
                <button className='text-left' onClick={()=>goToSlide(currentIndex-1)}>
                    <span>{prevCocktail.name}</span>
                    <img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
                </button>
                <button className='text-left' onClick={()=>goToSlide(currentIndex+1)}>
                    <span>{nextCocktail.name}</span>
                    <img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
                </button>
            </div>
            <div className='cocktail'>
                <img src={currentCocktail.image} className='object-contain'/>
            </div>
            <div className='recipe'>
                <div ref={contentRef} className='info'>
                    <p>
                        Recipie for:
                    </p>
                    <p id='title'>
                        {currentCocktail.name}
                    </p>

                </div>
                <div className="details">
                    <h2>{currentCocktail.title}</h2>
                    <p>
                        {currentCocktail.description}
                    </p>
                </div>
            </div>
            </div> 
      </section>
    </div>
  )
}

export default Menu
