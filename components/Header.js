import React, { useContext, useState } from 'react';
import Link from "next/link";
import { CartContext } from "@/components/CartContext";
import styled from "styled-components";

import Center from "@/components/Center";
import BarsIcon from "@/components/icons/Bars";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 101;
  svg{
    width:32px;
    height: 32px;
    color:#aaa;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  z-index: 100;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  font-family: 'Vazirmatn','Poppins', sans-serif;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 101;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>

          </Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>صفحه اصلی</NavLink>
            <NavLink href={'/products'}>کالاها</NavLink>
            <NavLink href={'/categories'}>دسته بندی ها</NavLink>
            <NavLink href={'/account'}>حساب کاربری</NavLink>
            <NavLink href={'/cart'}>سبد خرید ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}

export default Header


