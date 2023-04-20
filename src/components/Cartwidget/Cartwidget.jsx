import "./Cartwidget.css";
import carrito from "../images/carrito.jpg";
const Cardwidget = () => {
  return (
    <div className="bord">
      <div className="cardw">
        <>
          <h1>Mira tu carrito</h1>
          <div>
            <img src={carrito} style={{ height: "70px" }} />
          </div>
          <p>0</p>
        </>
      </div>
    </div>
  );
};

export default Cardwidget;
