import mongoose from "mongoose"

const Schema = mongoose.Schema;
//const ObjectId = Schema.Types.ObjectId;

const DeckShema = new Schema({
  title: String,
  cards: [String]
 
});

const DeckModel = mongoose.model("Deck", DeckShema)

export default DeckModel

