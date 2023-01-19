import express, {Request, Response} from "express"
import mongoose from "mongoose"
import Deck from "../models/Deck"
import { config } from "dotenv"
import cors from "cors"
import { getDecksController } from "./controllers/getDecksController"
import createDeckController from "./controllers/createDeckController"
import deleteDeckController from "./controllers/deleteDeckController"
import createCardForDeckController from "./controllers/createCardForDeckController"
import { getDeckController } from "./controllers/getDeckController"
import deleteCardOnDeckController from "./controllers/deleteCardOnDeckController"
config()


const PORT = 5000
const app = express()
app.use(express.json())
app.use(cors())

    
app.get("/decks", getDecksController)
app.post("/decks", createDeckController)
app.delete("/decks/:deckId", deleteDeckController )
app.get("/decks/:deckId", getDeckController)
app.post("/decks/:deckId/cards", createCardForDeckController)
app.delete("/decks/:deckId/cards/:index", deleteCardOnDeckController)

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listen on ${PORT}`)
app.listen(PORT)})