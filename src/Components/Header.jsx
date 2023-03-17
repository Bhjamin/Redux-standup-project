import { NavLink } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { setPotentialArticles } from "../redux/potentialArticles"
import { useDispatch } from "react-redux"


const { REACT_APP_API_KEY } = process.env

const Header = () => {

    const [input, setInput] = useState('')
    let disptch = useDispatch()

    const searchHandler = (e) => {
        e.preventDefault()
        axios.get(`https://newsapi.org/v2/everything?apiKey=${REACT_APP_API_KEY}&q=${input}&language=en`)
        .then(res => {
            console.log(res.data)
            disptch(setPotentialArticles(res.data.articles))
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="flex justify-between">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/details'>Details</NavLink>


            <form onSubmit={e => searchHandler(e)}>
                <input placeholder="Search the news for something" onChange={e => setInput(e.target.value)} />
                <button className="btn" >Search</button>
            </form>

        </div>
    )
 }

 export default Header