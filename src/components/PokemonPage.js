import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useEffect} from "react"
import {useState} from "react"

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() =>
  {
    fetch("http://localhost:3001/pokemon")
    .then(resp => resp.json())
    .then((data) =>
    {
      setPokemonList(data)
    })
  }, [])

  //search bar
  const [userInput, setUserInput] = useState("")

  function handleUserInput(event)
  {
    setUserInput(event.target.value)
  }

  //add a pokemon with form
  const [formData, setFormData] = useState(
    {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: "",
    }
  )

  function handleChange(event)
  {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(event)
  {
    event.preventDefault()

    const newObj = 
    {
      id: (pokemonList.length + 2),
      name: formData.name,
      hp: formData.hp,
      sprites:
      {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    console.log(newObj)

    fetch("http://localhost:3001/pokemon", 
    {
      method: "POST",
      headers: 
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    })
      .then((r) => r.json())
      .then((data) =>
      {
        setPokemonList([...pokemonList, data])
      })
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <br />
      <Search handleUserInput={handleUserInput} />
      <br />
      <PokemonCollection pokemonList={pokemonList} userInput={userInput}/>
    </Container>
  );
}

export default PokemonPage;
