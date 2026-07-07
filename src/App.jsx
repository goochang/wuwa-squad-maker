import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header'
import CharacterPanel from './components/character/CharacterPanel'
import PartyPanel from './components/party/PartyPanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <main className="container">
        <CharacterPanel />
        <PartyPanel />
      </main>
    </>
  )
}

export default App
