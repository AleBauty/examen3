import React, { createContext, useState, useContext } from 'react';

const HistorialContext = createContext();

export const HistorialProvider = ({ children }) => {
  const [historial, setHistorial] = useState([]);

  const agregarBusqueda = (busqueda) => {
    setHistorial(prevHistorial => [busqueda, ...prevHistorial].slice(0, 5));
  };

  const limpiarHistorial = () => {
    setHistorial([]);
  };

  return (
    <HistorialContext.Provider value={{ historial, agregarBusqueda, limpiarHistorial }}>
      {children}
    </HistorialContext.Provider>
  );
};

export const useHistorial = () => {
  const context = useContext(HistorialContext);
  if (!context) {
    throw new Error('useHistorial debe ser usado dentro de un HistorialProvider');
  }
  return context;
};

export default HistorialContext;