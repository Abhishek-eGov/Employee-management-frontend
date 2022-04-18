
import './App.css';
import Header from './components/Header/header';
import Home from './components/Homepage';
import { Routes, Route } from "react-router-dom"
import AddEmp from './components/AddEmployee';
import EditEmp from './components/EditEmployee';

function App() {
  return (
    <>

<Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="add" element={ <AddEmp/> } />
        <Route path="edit" element={ <EditEmp/> } />
      </Routes>

   
  </>
  );
}

export default App;
