import express, {Request, Response} from "express"
import mongoose from "mongoose"
import Deck from "../models/Deck"
import { config } from "dotenv"
config()


const PORT = 5000
const app = express()
app.use(express.json())

app.get("/",(req: Request, res: Response)=>{
    res.send("hello world")
    
})

app.post("/decks", async (req: Request, res: Response)=>{
    const newDeck = new Deck({
        title: req.body.title
    })
    const createDeck = await newDeck.save()
    res.json(createDeck)
})

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listen on ${PORT}`)
app.listen(PORT)})