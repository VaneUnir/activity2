import React from "react";
import { Header } from "./componentes/Header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/Carrito";
import { Slider } from "./componentes/Slider.js";

function App() {
  const mockImagenes = [
		'https://picsum.photos/id/1/1025/400',
		'https://picsum.photos/id/9/1025/400',
		'https://picsum.photos/id/26/1025/400',
	];
  return (
    

    <DataProvider>
      <div className="App">
        <Router>
          <Header/>
          <Slider imagenes={mockImagenes} />;

          <Carrito/>
          <Paginas />
        </Router>
      </div>
    </DataProvider>
    
    
  );
}

export default App;
