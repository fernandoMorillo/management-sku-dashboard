import React from "react";
import { MdMenu, MdDarkMode, MdBrightnessLow } from "react-icons/md";
import styled from "styled-components";

const Navbar = ({ toggleSidebar }) => {
  return (
    <>
      <NavbarContainer>
        <HamburguerMenu onClick={toggleSidebar} >
          <MdMenu size={24} />
        </HamburguerMenu>

        <ContainerTitle>
          <h5>SKU</h5>
        </ContainerTitle>

        <ContainerModo>
          <div>
            <MdBrightnessLow size={24} />
          </div>
          <div>
            <MdDarkMode size={24} />
          </div>
        </ContainerModo>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  div {
    font-weight: 400;
    color: #444141;
  }
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25) 0 0 5px 0;
`;

const ContainerTitle = styled.div`
  text-align: center;
  h5 {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const ContainerModo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 57px;
`;

const HamburguerMenu = styled.div`
  font-weight: bold;
  padding: 5px;
  
  :hover {
    background-color: #7a7979;
    border-radius: 10px;
    color: #ffff;
    cursor: pointer;
  }
`;
