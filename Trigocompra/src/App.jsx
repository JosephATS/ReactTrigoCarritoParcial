
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      name: 'Nintendo Switch',
      description: 'Consola Nintendo',
      url: 'swr.jpg',
      precio: 400
    },
    {
      id: 2,
      name: 'PS5',
      description: 'Consola PlayStation',
      url: 'ps5t6.jpg',
      precio: 500
    },

  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <h1>Wallmart Products</h1>
        <div className="row">
          {productos.map((producto) => (
            <Producto
              key={producto.id}
              name={producto.name}
              description={producto.description}
              url={producto.url}
              precio={producto.precio}
              addToCart={() => addToCart(producto)}
            />
          ))}
        </div>
        <div className="row mt-4">
          <Carrito cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
}

export default App;