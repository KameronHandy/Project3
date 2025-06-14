import { useState } from 'react';
import './App.css';
import ToDoList from './Component/ToDoList';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [chores , setChores] = useState ([
    
    {id : 1 , Importance: "High", task: "Take out the trash", Time: "11:20 a.m",Date: "06/13/25"},
    {id : 2, Importance: "Mid",  task: "Wash the dishes" , Time:"12:10 p.m",Date: "06/13/25"},
    {id : 3, Importance: "Low", task: "Put up the dishes", Time:"1:00 p.m", Date: "06/13/25"}

  ]) ;

  return (
    <>
    < Header/>
    <ToDoList chores={chores} setChores={setChores} />
    
    </>

  );
}

export default App;
