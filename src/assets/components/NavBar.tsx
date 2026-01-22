import { NavLink } from 'react-router-dom';
import style from '../styles/navbar.module.scss';
import type { CSSProperties } from 'react';

export function NavBar() {
  const activeStyles: CSSProperties = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <nav className={style.nav}>
      <NavLink style={({ isActive }) => (isActive ? activeStyles : undefined)} to={'/'}>
        Hovedside
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyles : undefined)} to={'/prognose'}>
        Prognose
      </NavLink>
      <NavLink style={({ isActive }) => (isActive ? activeStyles : undefined)} to={'/about'}>
        Om
      </NavLink>
    </nav>
  );
}
