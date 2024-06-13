import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function App() {

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>App Page</h1>
      <Outlet />
    </>
  )
}

export default App
