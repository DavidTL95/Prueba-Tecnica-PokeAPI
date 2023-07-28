
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { getAllPokemons } from '../services/apiCalls';

export const Home = () => {

    const [allPokemons, setAllPokemon] = useState([]);

    const getAllPokemons = async () => {
        const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const data = await respuesta.data.results;

        // console.log(data.results)

        function createPokemon(results){
            results.map((poemon) => {
                const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = res;
                setAllPokemon((currentList) => [...currentList,data])
            });
        }
        createPokemon(data.results)
        setAllPokemon(data)
        // console.log(data)
    }

    useEffect(()=>{
        getAllPokemons();
        console.log(allPokemons)
    }, [])

  return (
    <div className="appContainer">
        <div className="pokemonContainer">
            <div className="allContainer">
                {allPokemons.map((pokemon)=>{
                    return(
                    <h1>{pokemon.name}</h1>
                    )
                })}
            </div>
        </div>
    </div>
  )
}