import express, {Request, Response} from "express"
import Deck from "../../models/Deck"


export default async function deleteCardOnDeckController(req: Request, res: Response){
    
    const deckId = req.params.deckId
    const index = req.params.index
    const deck = await Deck.findById(deckId)
    
    if (!deck) return res.status(400).send("no")
    console.log(deck.cards)
    deck.cards.splice(parseInt(index), 1)
    console.log(deck.cards)
    await deck.save()
    res.json(deck)
    
}