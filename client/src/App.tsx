import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  Link } from "react-router-dom";
import { deleteDeck } from './assets/api/deleteDeck';
import { getDecks, TDeck } from './assets/api/getDecks';
import { createDeck } from './assets/api/createDeck';

function App() {
  const [decks, setDecks] = useState<TDeck[]>([])
  const [title, setTitle] = useState("") 

  async function handleCreateDeck (e: React.FormEvent){
    e.preventDefault()

  const deck = await createDeck(title)
  setDecks([...decks, deck])
  setTitle("")
  }

async function handleDeleteDeck(deckId:string) {
await deleteDeck(deckId)
setDecks(decks.filter((deck)=> deck._id !== deckId))}


useEffect(()=> {
  async function fetchDecks (){
    
   
   const newDecks = await getDecks() 
   setDecks(newDecks)}
   fetchDecks()
})

  return (
    <div className="App">
      <h1>Your decks</h1>
      <ul className="decks">
        {decks.map((deck)=> (<li key={deck._id}>
        <button onClick={() =>handleDeleteDeck(deck._id)}>X</button>
        <Link to={`decks/${deck._id}`}>{deck.title}</Link>
        </li>))}
      </ul>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input id="deck-title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value)}}/>
        <button>Create Deck</button>
      </form>
     
    </div>
  )
}

export default App
