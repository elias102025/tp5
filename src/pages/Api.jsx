import { useEffect, useState } from "react";

const Api = () => {
  const [clima, setClima] = useState(null);
  const [monedas, setMonedas] = useState({});
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const lat = -34.61;
  const lon = -58.38;

  useEffect(() => {
    const obtenerClima = fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    )
      .then((res) => res.json())
      .then((data) => setClima(data.current_weather))
      .catch((err) => setError("Error al cargar clima: " + err.message));

    const obtenerMonedas = fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        // Verificamos que existan los datos esperados
        if (data && data.rates) {
          setMonedas(data.rates);
        } else {
          setError("No se pudieron obtener las monedas.");
        }
      })
      .catch((err) => setError("Error al cargar monedas: " + err.message));

    Promise.all([obtenerClima, obtenerMonedas])
      .then(() => setCargando(false))
      .catch(() => setCargando(false));
  }, []);

  if (cargando) return <p style={{ textAlign: "center" }}>Cargando datos...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🌤 Clima y Cotizaciones</h1>

      {clima && (
        <div
          style={{
            margin: "20px auto",
            border: "1px solid #ccc",
            padding: "20px",
            width: "300px",
          }}
        >
          <h2>Clima Actual</h2>
          <p>Temperatura: {clima.temperature}°C</p>
          <p>Viento: {clima.windspeed} km/h</p>
          <p>Hora: {clima.time}</p>
        </div>
      )}

      {monedas && monedas.EUR ? (
        <div
          style={{
            margin: "20px auto",
            border: "1px solid #ccc",
            padding: "20px",
            width: "300px",
          }}
        >
          <h2>Cotizaciones</h2>
          <p>Euro (EUR): {monedas.EUR.toFixed(2)}</p>
          <p>Peso Argentino (ARS): {monedas.ARS?.toFixed(2)}</p>
          <p>Real Brasileño (BRL): {monedas.BRL?.toFixed(2)}</p>
        </div>
      ) : (
        <p>No se pudieron cargar las cotizaciones.</p>
      )}
    </div>
  );
};

export default Api;
