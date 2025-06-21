import React from 'react'
import {useState} from 'react'
import HistoryLog from '../Component/HistoryLog'
import SearchBar from '../Component/SearchBar'

export default function History() {

  const [chores , setChores] = useState ([
    
    {id : 1 , Importance: "High", task: "Take out the trash", Time: "11:20 a.m",Date: "06/13/25"},
    {id : 2, Importance: "Mid",  task: "Wash the dishes" , Time:"12:10 p.m",Date: "06/13/25"},
    {id : 3, Importance: "Low", task: "Put up the dishes", Time:"1:00 p.m", Date: "06/13/25"}
  ])

  return (
    <>
    <SearchBar chores={chores} setChores={setChores}/>
    <HistoryLog chores={chores} setChores={setChores} />
    </>
  )
}
