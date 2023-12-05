import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Routes, Route } from "react-router-dom"
import Todo from './views/Todo';
import SiteNav from './layout/SiteNav';
import Home from './views/Home';
import Form from './views/PersonalData';

function App() {

  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/personal-data" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
