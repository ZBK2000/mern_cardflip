import "./Header.css"
import {Link} from "react-router-dom"
export function Header(){
    return <div className="Header">
        <div>
        <a href= "/" >LOGO</a>
        </div>
        <div>
        <a href= "/" >DECKS</a>
        </div>
        <div>
        <a href= "/login" >LOGIN</a>
        </div>
    </div>
}