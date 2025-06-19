import React from 'react'
import {useStates} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';






export default function AddingChores(chores,setChores) {
  return (        
        <>

          <Form.Control type="text" placeholder="Task" />
          <br />        

          <Form.Control type="text" placeholder="When to be completed" />
          <br />

          <Form.Control type="text" placeholder="Date" />
          <br />

          <Button variant="primary">Add Chores</Button>
        </>
      );
    }
    

