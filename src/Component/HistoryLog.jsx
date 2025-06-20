import { useState } from 'react';
import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function HistoryLog({chores, setChores}) {
    console.log(chores.id)

    function buttonChange(event, choresId){
        console.log(event)
        console.log(choresId)

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
                </tr>
            ))}
            
          </tbody>
        </Table>
      );
    }