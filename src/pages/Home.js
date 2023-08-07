import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{display: 'grid', height: '100vh', placeItems: 'center'}}>
      <div style={{width: '300px', height: '200px', display: 'flex',
                   flexDirection: 'column', alignItems: 'center', 
                   justifyContent: 'space-between'}}>
        <div><Link to='/add'>Add a recipe</Link></div>
        <div><Link to='/study'>Study existing recipes</Link></div>
      </div>
    </div>
  )
}
