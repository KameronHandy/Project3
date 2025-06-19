import React from 'react'
import {useStates} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';






export default function AddingChores(chores,setChores) {

    const =[formData, setFormData]= useState({

        task:"",
        Time:"",
        Date:""
    })

    function handleChange(event){
        console.log(event)
    }

  return (        
        <>

          <Form.Control type="text" placeholder="Task" name="task" onChange={(event)=>handleChange(event)}/>
          <br />        

          <Form.Control type="text" placeholder="Time" name="Time" />
          <br />

          <Form.Control type="text" placeholder="Date" name="Date" />
          <br />

          <Button variant="primary">Add Chores</Button>
        </>
      );
    }
    

