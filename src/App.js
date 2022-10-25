import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
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
    weight: 2,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/375px-004Charmander.png',
    id: 0
  },
  {
    name: "Charmeleon",
    type: "Fire",
    evolved: true,
    weight: 6,
    color: 'red',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/375px-005Charmeleon.png',
    id: 1
  },
  {
    name: "Charizard",
    type: "Electric",
    evolved: true,
    weight: 30,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/375px-026Raichu.png',
    id: 2
  }
]
function App() {
  const [contador, setContador] = useState(0)
  const [pokemon, setPokemon] = useState(arrayPokemon[contador])


  const evoluirPokemon = () => {
    setContador(contador+1)
    setPokemon(arrayPokemon[contador])
  }

  return ( <>
  <GlobalStyles/>
    <FlexContainer>
      {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
      <PokemonCard pokemon={pokemon} evoluirPokemon={evoluirPokemon}/>
      {/* Crie aqui seus próximos pokemons! */}
    </FlexContainer>
  </>
    
  );
}

export default App;
