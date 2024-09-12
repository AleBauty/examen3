import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClimaDetalle from '../components/ClimaDetalle';
import useHistorial from '../hooks/useHistorial';

const Clima = () => {
  const [clima, setClima] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idCiudad } = useParams();
  const { historial, agregarBusqueda } = useHistorial();

  useEffect(() => {
    const fetchClima = async () => {
      try {
        setLoading(true);
        // Simulamos una llamada a la API
        const response = await fetch('/datos.json');
        if (!response.ok) {
          throw new Error('No se pudo obtener el clima');
        }
        const data = await response.json();
        setClima(data);
        agregarBusqueda({ id: idCiudad, nombre: data.nombre });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClima();
  }, [idCiudad, agregarBusqueda]);

  return (
    <div>
      <h1>Clima de la Ciudad</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {clima && <ClimaDetalle clima={clima} />}
      <h2>Historial de Consultas</h2>
      <ul>
        {historial.map((item, index) => (
          <li key={index}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clima;
