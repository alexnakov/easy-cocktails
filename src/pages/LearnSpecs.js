import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function LearnSpecs() {

  // These 3 go together for storing the cocktail list
  let storeData = JSON.parse(localStorage.getItem('cocktail-list'))
  if (storeData === null) { storeData = '' }
  const [cocktailList, setCocktailList] = useState(storeData)

  const removeCocktail = (index) => {
    const newCocktailList = cocktailList.filter((_, i) => i !== index)
    setCocktailList(newCocktailList)
  }

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
      <ul>
        {cocktailList.map((name, index) => 
          <li onClick={() => removeCocktail(index)} key={index}>{name}</li>
        )}
      </ul>
    </div>
  )
}
