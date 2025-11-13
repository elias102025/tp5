import { useState } from "react";

const SubirImagen = () => {
  const [imagen, setImagen] = useState(null);

  const handleImagen = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      setImagen(URL.createObjectURL(archivo));
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Subir imagen</h2>
      <input type="file" accept="image/*" onChange={handleImagen} />
      {imagen && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={imagen}
            alt="Vista previa"
            style={{ width: "300px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
};

export default SubirImagen;
