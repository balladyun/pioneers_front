import { createContext, useState, useContext } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>{children}</MenuContext.Provider>;
}
