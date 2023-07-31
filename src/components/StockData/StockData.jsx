import React, { useState, useEffect } from "react";
import fetchData from "../../services/fetchData";

import Input from "../GeneralElements/Input";
import Select from "../GeneralElements/Select";
import Table from "../GeneralElements/Table";
import styled from "styled-components";

const StockData = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);


  // Efecto para ejecutar fetchData, guardar y manipular los datos
  useEffect(() => {
    fetchData()
      .then((products) => {
        setData(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  // Función para manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  // Función para manejar el cambio en el término de búsqueda del input
  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  // Función para manejar el cambio en la cantidad de elementos por página
  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1); // Volver a la primera página al cambiar el número de datos por página
  };

  return (
    <ContainerInfoTable>
      {data && Object.keys(data).length > 0 ? (
        <>
          <div className="container--input_search">
            <Input value={searchTerm} onChange={handleSearchChange} />
            <Select
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>

          <Table
            data={data}
            searchTerm={searchTerm}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <>
          <ContainerErrorData>
            <h1>Sin datos cargados.</h1>
          </ContainerErrorData>
        </>
      )}
    </ContainerInfoTable>
  );
};
export default StockData;

const ContainerInfoTable = styled.div`
  width: 80%;
  .container--input_search {
    width: 80%;
    margin: 0 auto;
    padding: 0 0 25px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 15px;

    input {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      transition: border-color 0.2s ease;
      width: 80%;
    }
    input:focus {
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    }
    input.dark-mode {
      background-color: #1a1a1a;
      color: #fff;
      border-color: #555;
    }
    select {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
      transition: border-color 0.2s ease;
    }
  }
`;

const ContainerErrorData = styled.div`
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }
`;
