import React, { useEffect, useState } from 'react'
import './Deck.css'
import {  Link, useParams } from "react-router-dom";
import { getDecks, TDeck } from './assets/api/getDecks';
import { createCard } from './assets/api/createCard';
import { getDeck } from './assets/api/getDeck';
import { deleteCard } from './assets/api/deleteCard';



export default function Deck(){
  const [deck, setDeck] = useState<TDeck | undefined>()
  const [cards, setCards] = useState<string[]>([])
  const [text, setText] = useState("") 
  let {deckId} = useParams()

  async function handleCreateDeck (e: React.FormEvent){
    e.preventDefault()

  const {cards: serverCards} = await createCard(deckId!,text)
  setCards(serverCards)
  setText("")
  }

async function handleDeleteCard( index:number) {
  if (!deckId) return
const newDeck = await deleteCard(deckId, index)
setCards(newDeck.cards)
//setDecks(decks.filter((deck)=> deck._id !== deckId))}
}

useEffect(()=> {
  
  async function fetchDeck (){
    if (!deckId) return
  
   const newDeck = await getDeck(deckId) 
   setDeck(newDeck)
  setCards(newDeck.cards)
  console.log(cards)
  }
   fetchDeck()
}, [deckId])
 
  return (
    <div className="Deck">
      <h1>{deck?.title}</h1>
       <ul className="cards">
        {cards.map((card, index)=> (<li key={index}>
         <button onClick={() =>handleDeleteCard(index)}>X</button> 
        {card}
        </li>))}
      </ul> 
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="card-title">Card Text</label>
        <input id="card-title" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value)}}/>
        <button>Create Card</button>
      </form>
     
    </div>
  )
}
