import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  const location = useLocation();

  const shouldShowFooter = location.pathname !== '/profile';
  return (
    <>
      <Header />
      <Outlet />
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default Layout;
