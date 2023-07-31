import React from "react";

const Input = ({ value, onChange }) => {
  // Función para manejar el cambio en el término de búsqueda y llamar a la función onChange con el nuevo valor
  const handleSearchChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Buscar por ID o nombre..."
        value={value}
        onChange={handleSearchChange}
      />
    </>
  );
};

export default Input;
