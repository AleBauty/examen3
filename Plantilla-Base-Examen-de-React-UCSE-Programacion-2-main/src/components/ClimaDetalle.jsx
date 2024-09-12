import React from 'react';

const ClimaDetalle = ({ clima }) => {
  if (!clima) return <p>No hay datos de clima disponibles.</p>;

  return (
    <div>
      <h2>{clima.nombre}</h2>
      <p>Temperatura: {clima.temperatura}°C</p>
      <p>Humedad: {clima.humedad}%</p>
      <p>Condición: {clima.condicion}</p>
    </div>
  );
};

export default ClimaDetalle;