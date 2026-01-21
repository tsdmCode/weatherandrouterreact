import { NavBar } from './NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
