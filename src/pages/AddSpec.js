import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddSpec() {
  const [cocktailInfo, setCocktailInfo] = useState({
    name: '',
    method: '',
    ingredients: '', // TODO LATER [{vodka: 50ml},{passoa: 25ml},{Apple juice: 20ml}]
    ice: '',
    garnish: '',
    sideNotes: '',
    hint: '',
  })
  
  let storeData = localStorage.getItem('cocktail-list')

  if (storeData == 'undefined') { storeData = '' } 
  else {storeData = JSON.parse(storeData)}

  const [cocktailList, setCocktailList] = useState(storeData)

  const handleUserInput = (event) => {
    const {name, value} = event.target;
    // Updating an existing cocktail recipe (dictionary)
    setCocktailInfo((cocktailInfo) => ({
      ...cocktailInfo,
      [name]: value,
    }))
  }

  const submitCocktail = () => {
    setCocktailList(
      [...cocktailList, cocktailInfo]
    )
  }

  useEffect(() => {
    localStorage.setItem('cocktail-list', JSON.stringify(cocktailList))
  }, [cocktailList])

  return (
    <>
      <div>
        <button><Link to='/study'>Study your specs</Link></button>
        <button style={{float: 'right'}}><Link to='/'>Home</Link></button>
      </div>
      <h1>Add your cocktail</h1>

      <form>
        <label htmlFor="name">Cocktail Name</label><br />
        <input onChange={handleUserInput} type="text" id="name" name="name" value={cocktailInfo.name} /><br />
        <label htmlFor="method">method</label><br />
        <input onChange={handleUserInput} type="text" id="method" name="method"  value={cocktailInfo.method} /><br />
        <label htmlFor="ice">Ice</label><br />
        <input onChange={handleUserInput} type="text" id="ice" name="ice"  value={cocktailInfo.ice} /><br />
        <label htmlFor="ingredients">Ingredients and Quantitites</label><br />
        <input onChange={handleUserInput} type="text" id="ingredients" name="ingredients"  value={cocktailInfo.ingredients}/><br />
        <label htmlFor="garnish">Garnish</label><br />
        <input onChange={handleUserInput} type="text" id="garnish" name="garnish"  value={cocktailInfo.garnish} /><br />
        <label htmlFor="sideNotes">Side Notes</label><br />
        <input onChange={handleUserInput} type="text" id="sideNotes" name="sideNotes"  value={cocktailInfo.sideNotes} /><br />
        <label htmlFor="hint">Hint*</label><br />
        <input onChange={handleUserInput} type="text" id="hint" name="hint"  value={cocktailInfo.hint}/><br />
        <input onClick={submitCocktail} type="submit" value="Submit" />
      </form> 
      
    </>
  )
}
