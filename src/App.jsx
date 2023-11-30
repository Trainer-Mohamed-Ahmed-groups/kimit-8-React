import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import { Routes, Route } from "react-router-dom"
// import HandlingEvents from './views/HandlingEvents';
import Todo from './views/Todo';
import Loop from './components/Loop';
import Courses from './views/Courses';
import Recipes from './views/Recipes';
import SiteNav from './layout/SiteNav';

function App() {

  return (
    <div>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Loop />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      {/*       
      <HandlingEvents />
      */}
    </div>
  )
}

export default App
