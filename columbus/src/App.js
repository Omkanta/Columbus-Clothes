
import './App.css';
import Home from './Pages/Homepage';
import AllRoutes from './Components/AllRoutes';
import LargeWithNewsletter from "./Components/Footer";
import WithSubnavigation from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <WithSubnavigation/>
     <AllRoutes/>
     <LargeWithNewsletter/>
    </div>
  );
}

export default App;
