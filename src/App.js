import "./App.css"
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Persons from "./components/Persons/Persons";

function App() {
  return (
    <div className="header-persons">
      <div className="main-section">
        <Header />
        <Persons />
      </div>
      <div>
          <Cart />
      </div>
      
    </div>
  );
}

export default App;
