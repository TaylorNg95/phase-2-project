import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "../components/NavBar"

function App() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/players')
      .then(response => response.json())
      .then(players => {
        setPlayers(players)
        setLoading(false)
      })
  }, [])

  if(loading){
    return <h1>Loading...</h1>
  } else return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>App Page</h1>
      <Outlet context={{players: players}}/>
    </>
  )
}

export default App
