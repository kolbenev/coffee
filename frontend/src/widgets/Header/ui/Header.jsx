import React, { useEffect, useState } from "react";
import Logo from "@/shared/ui/Logo/Logo";
import Container from "@/shared/ui/Container/Container";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

import cls from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => {
    setActiveMenu((b) => !b);
    document.querySelector(".app")?.classList.toggle("overflow");
  };

  useEffect(() => {
    setActiveMenu(false);
    document.querySelector(".app")?.classList.remove("overflow");
  }, [pathname]);
  return (
    <header className={cls.header}>
      <Container className={cls.inner}>
        <Logo className={cls.logo} />
        <Menu activeMenu={activeMenu} />
        <MenuButton onClick={handleClick} activeMenu={activeMenu} />
      </Container>
    </header>
  );
};

export default Header;
