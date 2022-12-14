
import './app.scss';
import React,{Suspense} from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Bar from './components/NavigationBar/Bar';
const Landing=React.lazy(()=>import('./pages/Landing'))
const Catalogue=React.lazy(()=>import('./pages/Catalogue'))
const Cart=React.lazy(()=>import('./pages/Cart'))
function App() {
  return (
    <div className="App py-3">
    <BrowserRouter>
    <Bar/>
    <Suspense  fallback={<h1>Loading...</h1>}>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/catalogue/" element={<Catalogue />} />
    <Route path="/cart/" element={<Cart />} />
    </Routes>
    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
