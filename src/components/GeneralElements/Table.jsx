import React, { useState, useMemo } from "react";
import styled from "styled-components";

const Table = ({
  data,
  searchTerm,
  currentPage,
  itemsPerPage,
  onPageChange,
}) => {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Función para manejar el clic en los encabezados de las columnas para ordenar
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

// Filtrar productos por ID o título si existe un término de búsqueda (searchTerm)
  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = [...data];

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.id.toString().includes(searchTermLower) ||
          product.title.toLowerCase().includes(searchTermLower)
      );
    }

    // Ordenar los productos si hay una clave de ordenamiento definida en sortConfig
    if (sortConfig.key !== null) {
      filteredProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
           // Si el primer producto es menor que el segundo, devuelve -1 para orden ascendente o 1 para orden descendente
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
          // Si los productos son iguales, devuelve 0
        return 0;
      });
    }

    return filteredProducts;
  }, [data, sortConfig, searchTerm]);

  // Obtener la porción de datos actual para mostrar en la página actual de la lista
  const currentData = filteredAndSortedProducts.slice(startIndex, endIndex);

  // Calcular el número total de páginas para la paginación
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    onPageChange((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    onPageChange((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>ID</th>
            <th onClick={() => handleSort("title")}>Nombre del Producto</th>
        
          </tr>
        </thead>
        <tbody>
          {currentData.map((product) => (
            <tr key={product.id}>
            
              <td>{product.id}</td>
              <td>{product.title}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <ContainerButtonPagination>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button onClick={nextPage} disabled={currentPage >= totalPages}>
          Siguiente
        </button>
      </ContainerButtonPagination>
    </>
  );
};

const StyledTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 0 auto;

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
  }

  th {
    background-color: #f2f2f2;
  }
  th:hover {
    cursor: pointer;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  table.dark-mode {
    color: #fff;
    background-color: #1a1a1a;
  }

  table.dark-mode th,
  table.dark-mode td {
    border-color: #555;
  }
`;

const ContainerButtonPagination = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  margin-top: 17px;

  button {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.25) 0 0 5px 0;
    transition: transform 0.2s ease-in-out;
  }

  button:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

export default Table;
