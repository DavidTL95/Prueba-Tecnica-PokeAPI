
import React from 'react'
import './Header.css'
import pokeball from '../img/pokeball.png'
import pokeballOff from '../img/pokeball-off.png'

export const Header = () => {
  return (
    <div className='title'>
        <div className='titleLeft'>
            <p>Pokédex</p>
            <div className="caughtSeen">
                <div className='caught'>
                    <img src={pokeball} alt="pokeball" style={{width:"30px", marginRight:"10px"}}/>
                    <p>999</p>
                </div>
                <div className="seen">
                    <img src={pokeballOff} alt="pokeballOff" style={{width:"30px", marginRight:"10px"}}/>
                    <p>999</p>
                </div>
            </div>
        </div>
    </div>
  )
}