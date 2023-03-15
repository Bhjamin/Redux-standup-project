import React from 'react'
import { selectDisplay } from '../redux/displayArticle'
import { useSelector } from 'react-redux'

const Details = () => {

  const displayArticle = useSelector(selectDisplay)
  console.log(displayArticle)

  return (
    <div>Details
      <p>{displayArticle.title}</p>
      <img src={displayArticle.urlToImage} />
      <a href={displayArticle.url} target='_blank' >See full article</a>
    </div>
  )
}

export default Details