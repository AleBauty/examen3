import { useContext } from 'react';
import HistorialContext from '../context/HistorialContext';

const useHistorial = () => {
  const { historial, setHistorial } = useContext(HistorialContext);

  const agregarConsulta = (consulta) => {
    // Lógica para agregar una consulta al historial
    setHistorial([...historial, consulta]);
  };

  const limpiarHistorial = () => {
    // Lógica para limpiar el historial
    setHistorial([]);
  };

  return { historial, agregarConsulta, limpiarHistorial };
};

export default useHistorial;
