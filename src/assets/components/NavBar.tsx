import { NavLink } from 'react-router-dom';
import style from '../styles/navbar.module.scss';

export function NavBar() {
  return (
    <nav className={style.nav}>
      <NavLink to={'/'}>Hovedside</NavLink>
      <NavLink to={'/prognose'}>Prognose</NavLink>
      <NavLink to={'/about'}>Om</NavLink>
    </nav>
  );
}
