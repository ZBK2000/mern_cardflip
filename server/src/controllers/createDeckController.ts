import express, {Request, Response} from "express"
import Deck from "../../models/Deck"


export default async function createDeckController(req: Request, res: Response){
    
        const newDeck = new Deck({
            title: req.body.title
        })
        const createDeck = await newDeck.save()
        res.json(createDeck)
}