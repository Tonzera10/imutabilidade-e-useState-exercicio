import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, ImagemStyle} from './styles'
import { useState } from 'react'
import Cards from '../Cards/Cards'

const arrayPokemon = [
  {
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  },
  {
    name: "Pikachu",
    type: "Electric",
    evolved: true,
    weight: 6,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/375px-025Pikachu.png',
    id: 1
  },
  {
    name: "Raichu",
    type: "Electric",
    evolved: true,
    weight: 30,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/375px-026Raichu.png',
    id: 2
  }
]
const arrayPokemon2 = [
  {
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8.5,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/375px-004Charmander.png',
    id: 0
  },
  {
    name: "Charmeleon",
    type: "Fire",
    evolved: true,
    weight: 16,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/375px-005Charmeleon.png',
    id: 1
  },
  {
    name: "Charizard",
    type: "Fire",
    evolved: true,
    weight: 90,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/375px-006Charizard.png',
    id: 2
  }
]
const arrayPokemon3 = [
  {
    name: "Bulbasauro",
    type: "Grass",
    evolved: false,
    weight: 6.9,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/375px-001Bulbasaur.png',
    id: 0
  },
  {
    name: "Ivysaur",
    type: "Grass",
    evolved: true,
    weight: 13,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/375px-002Ivysaur.png',
    id: 1
  },
  {
    name: "Venusaur",
    type: "Grass",
    evolved: true,
    weight: 100,
    color: 'green',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/375px-003Venusaur.png',
    id: 2
  }
]
const arrayPokemon4 = [
  {
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/375px-007Squirtle.png',
    id: 0
  },
  {
    name: "Wartortle",
    type: "Water",
    evolved: true,
    weight: 22.5,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/375px-008Wartortle.png',
    id: 1
  },
  {
    name: "Blastoise",
    type: "Water",
    evolved: true,
    weight: 85.5,
    color: 'blue',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/375px-009Blastoise.png',
    id: 2
  }
]

const PokemonCard = () => {
  const [contador, setContador] = useState(0)
  const [pokemon, setPokemon] = useState(arrayPokemon[contador])

  const [contador2, setContador2] = useState(0)
  const [pokemon2, setPokemon2] = useState(arrayPokemon2[contador])

  const [contador3, setContador3] = useState(0)
  const [pokemon3, setPokemon3] = useState(arrayPokemon3[contador])

  const [contador4, setContador4] = useState(0)
  const [pokemon4, setPokemon4] = useState(arrayPokemon4[contador])

  const evoluirPokemon = () => {
    if(contador<3){
      setContador(contador+1)
      setPokemon(arrayPokemon[contador])
    }
  }    
  const evoluirPokemon2 = () => {
    if(contador2<3){
      setContador2(contador2+1)
      setPokemon2(arrayPokemon2[contador2])
    }
  }    
  const evoluirPokemon3 = () => {
    if(contador3<3){
      setContador3(contador3+1)
      setPokemon3(arrayPokemon3[contador3])
    }
  }    
  const evoluirPokemon4 = () => {
    if(contador4<3){
      setContador4(contador4+1)
      setPokemon4(arrayPokemon4[contador4])
    }
  }    
  return (
    <>
      <Cards pokemon={pokemon} evoluirPokemon={evoluirPokemon}/>
      <Cards pokemon={pokemon2} evoluirPokemon={evoluirPokemon2}/>
      <Cards pokemon={pokemon3} evoluirPokemon={evoluirPokemon3}/>
      <Cards pokemon={pokemon4} evoluirPokemon={evoluirPokemon4}/>
    </>
  )
}

export default PokemonCard