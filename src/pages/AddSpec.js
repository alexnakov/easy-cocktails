import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddSpec() {
  const [cocktailInfo, setCocktailInfo] = useState({
    name: '',
    method: '',
    // [{ingridient: vodka, amount: 25, unit: ml},{},]
    ingredients: '', 
    ice: '',
    garnish: '',
    sideNotes: '',
    hint: '',
  })
  
  let storeData = localStorage.getItem('cocktail-list')
  if (storeData == 'undefined') { storeData = '' } 
  else {storeData = JSON.parse(storeData)}
  const [cocktailList, setCocktailList] = useState(storeData)

  // spirit in the content of the cocktail recipe is not limited to alchohol
  // perishables should be regarded as spirit so I can use ingredients 
  // as the collection of ingredients (spirits), amounts and units.
  const [spirit, setSpirit] = useState('')
  const [amount, setAmount] = useState('')
  const [unit, setUnit] = useState('')

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
        
        <fieldset>
          <label htmlFor="ingredients">Ingredients and Quantitites</label><br />
          <div style={{display: 'flex', padding: '10px'}}>
            <input onChange={handleUserInput} type="text" id="ingredient" name="ingredient" value={spirit} style={{margin: '5px'}}/><br />
            <input onChange={handleUserInput} type="text" id="amount" name="amount" value={amount} style={{margin: '5px'}}/><br />
            <input onChange={handleUserInput} type="text" id="unit" name="unit" value={unit} style={{margin: '5px'}}/><br />
            <button style={{margin: '5px'}}>Add ingredient</button>
          </div>
        </fieldset>
      
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
