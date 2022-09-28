import "./App.css"
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import Persons from "./components/Persons/Persons";

function App() {
  return (
    <div className="header-persons">
      <div>
        <Header />
        <Persons />
      </div>
      <div className="d-flex justify-content-between ">
          <Cart />
      </div>
      
    </div>
  );
}

export default App;
