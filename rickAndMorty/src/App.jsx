import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import HomePage from './pages/HomePages'

function App() {

  return (
    <>
      <h1>The Begining</h1>
      <Link to="/">Home</Link>
    </>
  )
}

export default App
