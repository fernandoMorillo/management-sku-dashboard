import React, {useState} from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import StockData from "../components/StockData/StockData";
import styled from "styled-components";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  // Función para alternar el estado del sidebar (abierto/cerrado)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
      <ContainerMain>
        <Sidebar isOpen={isSidebarOpen} />
        <ContainerInformation>
          <StockData />
        </ContainerInformation>
      </ContainerMain>
    </div>
  );
};

export default Layout;

const ContainerMain = styled.div`
  display: flex;
  height: auto;
`;

const ContainerInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ isOpen }) => (isOpen ? 'calc(100vw - 16rem)' : '100%')};
  padding: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
