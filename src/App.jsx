import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Todo from './views/Todo';
import SiteNav from './layout/SiteNav';
import Home from './views/Home';
import Products from './views/Products';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Counter from './views/Counter';
import CallBackExplain from './views/CallBackExplain';

function App() {

  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={theme.theme}>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/counter" Component={Counter} />
        <Route path="/callback" Component={CallBackExplain} />
      </Routes>
    </div>
  )
}

export default App
