
import React from 'react';

const Carrito = ({ cart, setCart }) => {
  const handleClearCart = () => {
    setCart([]); 
  };

 
  const calcularTotal = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <div id="carrito" className="col-2 bg-secondary text-light p-3">
      <h3>Carrito de Compras</h3>
      <ul id="cont-cart">
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - Cantidad: {item.quantity}
          </li>
        ))}
      </ul>
      <p>TOTAL: <span id="total-cart">S/ {calcularTotal()}</span></p>
      <button className="btn btn-primary mb-2">PAGAR</button>
      <button className="btn btn-danger" onClick={handleClearCart} style={{ marginLeft: '10px' }}>Limpiar Carrito</button>
    </div>
  );
};

export default Carrito;