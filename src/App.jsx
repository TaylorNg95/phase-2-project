import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import NavBar from "./components/NavBar"
import { Box } from "@mui/material"

function App() {
  console.log('in App')
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

  function addPlayer(newPlayer){
    setPlayers([...players, newPlayer])
  }

  function deletePlayer(id){
    setPlayers(players.filter(player => player.id !== id))
  }

  function editPlayer(updatedPlayer){
    setPlayers(players.map(player => {
      if(player.id === updatedPlayer.id){
        return updatedPlayer
      } else return player
    }))
  }

  if(loading){
    return <h1>Loading...</h1>
  } else return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={{players: players, addPlayer, deletePlayer, editPlayer}}/>
    </>
  )
}

export default App
