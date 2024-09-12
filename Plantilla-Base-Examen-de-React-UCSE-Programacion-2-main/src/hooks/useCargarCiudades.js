import { useState, useEffect } from 'react';

const useCargarCiudades = () => {
  const [ciudades, setCiudades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarCiudades = async () => {
      try {
        setLoading(true);
        const response = await fetch('/datos.json');
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de ciudades');
        }
        const data = await response.json();
        setCiudades(data.ciudades);
        setError(null);
      } catch (err) {
        setError(err.message);
        setCiudades([]);
      } finally {
        setLoading(false);
      }
    };

    cargarCiudades();
  }, []);

  return { ciudades, loading, error };
};

export default useCargarCiudades;