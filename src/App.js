import { useState } from 'react';
import './App.css';
import ToDoList from './Component/ToDoList';
import Header from './Component/Header';
import SearchBar from './Component/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddingChores from './Component/AddingChores';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import Homepage from './Pages/HomePage';
import Organizer from './Pages/Organizer';
import History from './Pages/History'




function App() {

  const [chores , setChores] = useState ([
    
    {id : 1 , Importance: "High", task: "Take out the trash", Time: "11:20 a.m",Date: "06/13/25"},
    {id : 2, Importance: "Mid",  task: "Wash the dishes" , Time:"12:10 p.m",Date: "06/13/25"},
    {id : 3, Importance: "Low", task: "Put up the dishes", Time:"1:00 p.m", Date: "06/13/25"}

  ]) ;

  return (
    <>

    < Header/>

    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/History" element ={<History/>}/>
          <Route path="Organizer" element ={<Organizer/>}/>
      </Routes>
    </BrowserRouter>

    
    </>

  );
}

export default App;
