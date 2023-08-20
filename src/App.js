import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
