import React from 'react'
import gsap from 'gsap'
import { allCocktails } from '../../constants'
import { useState } from 'react'
const Menu = () => {
    const [currentIndex, setcurrentIndex] = useState(0)
    const totalCocktail=allCocktails.length
    const goToSlide=(index)=>{
        const newIndex=(index+totalCocktail)%totalCocktail;
        
    }
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
                    onClick={()=>setcurrentIndex(cocktail.id)}
                    >
                        {cocktail.name}
                    </button>
                )
            })}
        </nav>
      </section>
    </div>
  )
}

export default Menu
