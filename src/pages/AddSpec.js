import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddSpec() {
  // These 3 go together for storing the cocktail list
  let storeData = JSON.parse(localStorage.getItem('cocktail-list'))
  if (storeData === null) { storeData = '' }
  const [cocktailList, setCocktailList] = useState(storeData)

  const [cocktailName, setCocktailName] = useState('')
  
  // updates the value of the cockName in input box which
  // is accessible anywhere in the component
  function changeCocktail(event) {
    setCocktailName(event.target.value)
  }

  function addCocktail() {
    if (cocktailName !== '') {
      setCocktailList([...cocktailList, cocktailName])
    }

    setCocktailName('')
  }

  useEffect(() => {
    localStorage.setItem('cocktail-list', JSON.stringify(cocktailList))
  }, [cocktailList])

  const [cocktailName2, setCocktailName2] = useState({
    name: '',
    method: '',
    ingredients: [],
    garnish: '',
    sideNotes: '',
    hint: '',
  });

  return (
    <>
      <div>
        <button><Link to='/study'>Study your specs</Link></button>
        <button style={{float: 'right'}}><Link to='/'>Home</Link></button>
      </div>
      <h1>Add your cocktail</h1>
      <form action="/action_page.php">
        <label for="fname">Cocktail Name</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="lname">Method</label><br />
        <input type="text" id="lname" name="lname" /><br />
        <label for="fname">Ingredients and Quantitites</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="fname">Garnish</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="fname">Side Notes</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="fname">Hint*</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <input type="submit" value="Submit" />
      </form> 
      
    </>
  )
}
