import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton, ImagemStyle} from './styles'



const PokemonCard = ({pokemon, evoluirPokemon}) => {

    
  return (
    <Card color={pokemon.color}>
        <ImagemStyle src={pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <p>{pokemon.weight}kg</p>

        <EvolveButton onClick={evoluirPokemon}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard