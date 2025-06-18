import { useState } from 'react';
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ToDoList({chores, setChores}) {
    console.log(chores.id)

    function buttonChange(event, choresId){
        console.log(event)
        console.log(choresId)

    }
    
    function removeTask(event, choresId){
        console.log(event)
        console.log(choresId)
        const Update = chores.filter(chore=>chore.id!==choresId)
        setChores (Update)


    }


    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Importance</th>
              <th>Task</th>
              <th>When to be completed</th>
              <th>Date</th>
              <th>Completion Status</th>
              <th>Remove Task</th>
            </tr>
          </thead>
          <tbody>
            {chores.map((chore,index)=>(
                <tr>
                    <td>{index+1}</td>
                    <td>{chore.Importance}</td>
                    <td>{chore.task}</td>
                    <td>{chore.Time}</td>
                    <td>{chore.Date}</td>
                    <td><Button variant="warning"  onClick= {(event) =>buttonChange(event,chore.id)}> Incomplete</Button></td>
                    <td><Button variant="danger" onClick={(event) =>removeTask(event,chore.id)}>Remove</Button></td>
                </tr>
            ))}
            
          </tbody>
        </Table>
      );
    }
    
