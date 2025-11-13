import { useState } from "react";

const SubirImagen = () => {
  const [imagen, setImagen] = useState(null);

  const handleChange = (e) => {
    setImagen(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />

      {imagen && (
        <div>
          <h3>Vista previa:</h3>
          <img src={imagen} style={{ maxWidth: "300px", marginTop: "20px" }} />
        </div>
      )}
    </div>
  );
};

export default SubirImagen;
