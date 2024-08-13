import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './ui/Logo';
import menuIcon from '../assets/icons/menu.svg';
import closeIcon from '../assets/icons/closeIcon.svg';
import whiteMenu from '../assets/icons/whitemenu.svg';
import { useMenu } from '../context/MenuProvider';
import WhiteLogo from './ui/WhiteLogo';

export default function Header() {
  const { isMenuOpen, toggleMenu } = useMenu();
  const [bgColor, setBgColor] = useState('');
  const { pathname } = useLocation();

  const getBgColor = () => {
    if (
      pathname === '/' ||
      pathname === '/about' ||
      pathname === '/test' ||
      pathname.startsWith('/result')
    ) {
      setBgColor('bg-primary');
    } else if (pathname === '/card') {
      setBgColor('bg-black');
    } else {
      setBgColor('bg-white');
    }
  };

  useEffect(() => {
    getBgColor();
  }, [pathname]);

  const getMenuIcon = () => {
    if (pathname === '/card') {
      return whiteMenu;
    }
    return menuIcon;
  };

  const getLogo = () => {
    if (pathname === '/card' && !isMenuOpen) {
      return <WhiteLogo />;
    }
    return <Logo />;
  };

  return (
    <header
      className={`relative flex items-center justify-between p-5 ${isMenuOpen ? 'bg-primary' : bgColor}`}
    >
      {getLogo()}
      <button type='button' onClick={toggleMenu}>
        <img src={isMenuOpen ? closeIcon : getMenuIcon()} alt='menu' />
      </button>
      {isMenuOpen && (
        <nav className='absolute left-0 z-20 w-full h-screen-minus-header top-16 bg-primary'>
          <ul className='flex flex-col px-5 space-y-8 text-2xl font-bold text-black pt-28 text-start'>
            <Link to='/' onClick={toggleMenu}>
              Home
            </Link>
            <Link to='/about' onClick={toggleMenu}>
              About
            </Link>
            <Link to='/test-overview' onClick={toggleMenu}>
              Test
            </Link>
            <Link to='/subscribe' onClick={toggleMenu}>
              News Letter
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
}
