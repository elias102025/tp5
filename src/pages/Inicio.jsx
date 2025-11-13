import SubirImagen from "../components/SubirImagen.jsx";

const Inicio = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Bienvenido a nuestra página</h1>
      <p>Puedes subir una imagen desde tu dispositivo:</p>
      <SubirImagen />
    </div>
  );
};

export default Inicio;
