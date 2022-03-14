import './App.css';
import HomePage from './Pages/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PennyProfit from './Pages/Pennyprofit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/home" element={<HomePage />} ></Route>
            <Route path="/pennyprofit" element={<PennyProfit />} ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
