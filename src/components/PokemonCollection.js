import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import {useState} from "react"

function PokemonCollection({pokemonList, userInput}) {

  console.log(userInput)

  const [isBack, setIsBack] = useState(false)

  function toggleCard(event)
  {
    setIsBack((isBack) => !isBack)
    console.log(event)
  }

  // const imageSource = isBack ? sprites.back : sprites.front


  //filter with user input from search bar
const filteredList = pokemonList.filter((item) =>
{
  if (userInput === "")
  {
    return item
  }
  else if (userInput === item.name)
  {
    return item
  }
})
  
  //display list
    const displayList = filteredList.map((item) =>
    {
      return(
        <PokemonCard name={item.name} hp={item.hp} sprites={item.sprites} toggleCard={toggleCard} />
      )
  })

  return (
    <Card.Group itemsPerRow={6}>
      {displayList}
    </Card.Group>
  );
}

export default PokemonCollection;
