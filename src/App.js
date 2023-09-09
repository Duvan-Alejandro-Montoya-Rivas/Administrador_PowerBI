
import './App.css';
import HeaderComponent from './CabecerayPieDePagina/HeaderComponent';
import FooterComponent from './CabecerayPieDePagina/FooterComponent';
import Tablero from './Componentes/Pagina3/TaberloBi'
import { BrowserRouter, Route ,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route exact path="/" element ={<Tablero/>}></Route>
        </Routes>
      </div>
      
    </BrowserRouter>
  </div>
  );
}

export default App;
