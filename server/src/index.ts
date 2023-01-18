import express, {Request, Response} from "express"
import mongoose from "mongoose"
import Deck from "../models/Deck"
import { config } from "dotenv"
import cors from "cors"
config()


const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req: Request, res: Response)=>{
    res.send("hello world")
    
})
app.get("/decks", async (req: Request, res: Response)=>{
    const decks = await Deck.find()
    res.json(decks)
})

app.post("/decks", async (req: Request, res: Response)=>{
    const newDeck = new Deck({
        title: req.body.title
    })
    const createDeck = await newDeck.save()
    res.json(createDeck)
})

app.delete("/decks/:deckId",  async (req: Request, res: Response)=>{
const deckId = req.params.deckId
const deck = await Deck.findByIdAndDelete(deckId)
res.json(deck)
})

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listen on ${PORT}`)
app.listen(PORT)})