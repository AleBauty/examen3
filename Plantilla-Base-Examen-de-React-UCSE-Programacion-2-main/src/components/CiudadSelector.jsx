import React from 'react';
import useCargarCiudades from '../hooks/useCargarCiudades';

const CiudadSelector = ({ onSeleccionarCiudad }) => {
  const { ciudades, loading, error } = useCargarCiudades();

  if (loading) return <p>Cargando ciudades...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <select onChange={(e) => onSeleccionarCiudad(e.target.value)}>
      <option value="">Selecciona una ciudad</option>
      {ciudades.map((ciudad) => (
        <option key={ciudad.id} value={ciudad.id}>
          {ciudad.nombre}
        </option>
      ))}
    </select>
  );
};

export default CiudadSelector;