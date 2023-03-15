import React from 'react'
import { useSelector } from 'react-redux'
import { selectPotentials } from '../redux/potentialArticles'
import './Home.css'

const Home = () => {


const potentialArticles = useSelector(selectPotentials)

const articleDisplay = potentialArticles.map(article => {
  return (
    <div className='article-Container' >
      <h1>{article.title}</h1>

      {
        article.urlToImage ? (<img src={article.urlToImage} />) : (console.log(article.urlToImage)) 
      }
      
    </div>
  )
})

  return (
    <div>{articleDisplay}</div>
  )
}

export default Home