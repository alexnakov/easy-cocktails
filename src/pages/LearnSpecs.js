import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CocktailCard from './components/CocktailCard'

export default function LearnSpecs() {

  // These 3 go together for storing the cocktail list
  let storeData = localStorage.getItem('cocktail-list')

  if (storeData == 'undefined') { storeData = '' } 
  else {storeData = JSON.parse(storeData)}

  const [cocktailList, setCocktailList] = useState(storeData)

  // const removeCocktail = (index) => {
  //   const newCocktailList = cocktailList.filter((_, i) => i !== index)
  //   setCocktailList(newCocktailList)
  // }

  useEffect(() => {
    localStorage.setItem('cocktail-list', JSON.stringify(cocktailList))
  }, [cocktailList])

  return (
    <div>
      <div>
        <button><Link to='/add'>Add a cocktail recipe</Link></button>
        <button style={{float: 'right'}}><Link to='/'>Home</Link></button>
      </div>
      <div>Study your specs</div>

      <div>
        <ul>
          {cocktailList.map((wholeCocktail, parentKey) => (
            <li key={parentKey} style={{listStyleType: 'none'}}><ul key={parentKey}>{Object.keys(wholeCocktail).map((info, childKey) => (
              <li key={`${parentKey}${childKey}`} style={{listStyleType: 'none'}} >{info} : {wholeCocktail[info]}</li>
              ))}</ul>
            </li>
          ))}
        </ul>
      </div>

      <hr></hr>

      <CocktailCard />
    </div>
  )
}
