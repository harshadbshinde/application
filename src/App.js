import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: "₹89,999",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
    },
    {
      id: 2,
      name: "Smartphone",
      price: "₹29,999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "₹7,999",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
    },
    {
      id: 4,
      name: "Wireless Headphones",
      price: "₹3,999",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 5,
      name: "DSLR Camera",
      price: "₹54,999",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "₹2,499",
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500"
    }
  ];

  return (
    <div className="App">

      <header className="header">
        <h1>🛒 Harsh Shopping Store</h1>
        <p>Premium Electronics Collection</p>
      </header>

      <div className="products">

        {products.map((product) => (
          <div className="card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <h3>{product.price}</h3>

            <button>Add To Cart</button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default App;