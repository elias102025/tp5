const Contacto = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <form style={{ flex: 1 }}>
        <h2>Contacto</h2>
        <input type="text" placeholder="Tu nombre" style={{ display: "block", marginBottom: "10px" }} />
        <input type="email" placeholder="Tu correo" style={{ display: "block", marginBottom: "10px" }} />
        <textarea placeholder="Tu mensaje" style={{ display: "block", marginBottom: "10px" }}></textarea>
        <button>Enviar</button>
      </form>

      <iframe
        title="Mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.847933708515!2d-58.38155948477016!3d-34.60368498045913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaccaa3c22cb%3A0x8f505d5f9a9ad3cf!2sObelisco!5e0!3m2!1ses-419!2sar!4v1618940418906!5m2!1ses-419!2sar"
        width="400"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contacto;
