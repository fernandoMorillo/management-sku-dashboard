import React from "react";

import styled from "styled-components";
import { MdHome, MdAttachMoney, MdDataExploration } from "react-icons/md";

const listMenu = [
  { id: 1, title: "Inicio", icons: <MdHome size={24} />, url: "/" },
  { id: 2, title: "Ventas", icons: <MdAttachMoney size={24} />, url: "/sales" },
  {
    id: 3,
    title: "Datos",
    icons: <MdDataExploration size={24} />,
    url: "/clients",
  },
];

const Sidebar = ({ isOpen }) => {
  return (
    <>
      <div>
        <SidebarContainer
         isOpen={isOpen}
        >
          <div>
            <ul>
              {listMenu.map((items) => (
                <li key={items.id}>
                  <span>{items.icons}</span>

                  <a href={items.url}>{items.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </SidebarContainer>
      </div>
    </>
  );
};

export default Sidebar;

const SidebarContainer = styled.aside`
  width: 14rem;
  height: 100vh;
  border-right: 1px solid #3333333d;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  transition: opacity 0.3s, transform 0.3s;



  ul {
    list-style: none;
    padding: 1rem 10px;
    li {
      margin-bottom: 1rem;
      font-size: 1.2rem;
      margin: 30px 0;
      display: flex;
      align-items: initial;
      gap: 10px;
      padding: 20px;
      a {
        text-decoration: none;
        color: #444141;
      }
    }
    li:hover {
      background-color: #7a7979;
      border-radius: 10px;
      color: #ffff;
    }
    li:hover a {
      color: white;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
