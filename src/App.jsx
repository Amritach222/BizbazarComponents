
import './app.scss';
import Landing from './pages/Landing';
import { Routes, Route, } from "react-router-dom";
import Catalogue from './pages/Catalogue'
function App() {
  return (
    <div className="App py-3">
    <Routes>
       <Route path="/" element={<Landing />} />
       <Route path="/catalogue/" element={<Catalogue />} />
     </Routes>
    </div>
  );
}

export default App;
