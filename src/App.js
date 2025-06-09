import { useState } from 'react';
import './App.css';
import ToDoList from './Component/ToDoList';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [chores , setChores] = useState ([
    
    {id : 1 , MostImportant: "Take out the trash", Time:"When you want it to be completed"},
    {id : 2, SemiImportant: "Wash the dishes" , Time:"When you want it to be completed"},
    {id : 3, LeastImportant: "Put up the dishes", Time:"When you want it to be completed"}

  ]) ;

  return (
    <>
    < Header/>
    <ToDoList chores={chores} setChores={setChores} />
    
    </>

  );
}

export default App;
