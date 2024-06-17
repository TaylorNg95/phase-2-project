import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink to='/players'>
        View All Players
      </NavLink>
      <NavLink to='/new'>
        Add New Player
      </NavLink>
    </nav>
  );
}