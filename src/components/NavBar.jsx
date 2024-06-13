import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink to='/players'>Players</NavLink>
            <NavLink to='/new'>New Player</NavLink>
            <NavLink to='/notes'>Notes</NavLink>
        </nav>
    )
}

export default NavBar