import React from 'react'

const Select = ({ itemsPerPage, onItemsPerPageChange }) => {
  return (
    <div>
      <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(event) => onItemsPerPageChange(parseInt(event.target.value))}
            label="Datos por página"
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
        
          </select>
    </div>
  )
}

export default Select
