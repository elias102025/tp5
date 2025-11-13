const Servicios = () => {
  const habitaciones = [
    {
      id: 1,
      nombre: "Suite Deluxe",
      descripcion: "Habitación con vista al mar y jacuzzi privado.",
      precio: "$150 por noche",
      imagen: "https://via.placeholder.com/200x150?text=Suite+Deluxe",
    },
    {
      id: 2,
      nombre: "Habitación Doble",
      descripcion: "Cómoda y moderna habitación doble.",
      precio: "$90 por noche",
      imagen: "https://via.placeholder.com/200x150?text=Habitación+Doble",
    },
    {
      id: 3,
      nombre: "Habitación Simple",
      descripcion: "Ideal para viajeros individuales.",
      precio: "$60 por noche",
      imagen: "https://via.placeholder.com/200x150?text=Habitación+Simple",
    },
  ];

  return (
    <div>
      <h1>Servicios - Habitaciones</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {habitaciones.map((hab) => (
          <div key={hab.id} style={{ border: "1px solid #ccc", padding: "10px", width: "220px" }}>
            <img src={hab.imagen} alt={hab.nombre} style={{ width: "100%" }} />
            <h3>{hab.nombre}</h3>
            <p>{hab.descripcion}</p>
            <p><strong>{hab.precio}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
