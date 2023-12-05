import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Todo from './views/Todo';
import SiteNav from './layout/SiteNav';
import Home from './views/Home';
import Form from './views/PersonalData';
import UseEffectExplain from './components/UseEffectExplain';
import Products from './views/Products';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={theme.theme}>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/personal-data" element={<Form />} />
        <Route path="/useEffect-explain" element={<UseEffectExplain />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
