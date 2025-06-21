import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';






export default function AddingChores({chores, setChores}) {

    const [formData, setFormData]= useState({
        Importance:"",
        task : "",
        Time : "",
        Date : ""
    })

    function handleChange(event){
        const {name,value} = (event.target)
        console.log(name,value)
        setFormData({...formData, [name]:value})
    }

    function addChores(){
        console.log(formData)
        setChores([...chores, formData])
    }

    function DropDownSelect(event){
      console.log(event)


    }

    

  return (        
        <>
          <Form>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Importance</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option name="Importance">High</option>
                <option>Mid</option>
                <option>Low</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <br />
          <Form.Control type="text" placeholder="Task" name="task" onChange={(event)=>handleChange(event)}/>
          <br />        

          <Form.Control type="text" placeholder="Time" name="Time"  onChange={(event)=>handleChange(event)}/>
          <br />

          <Form.Control type="text" placeholder="Date" name="Date"  onChange={(event)=>handleChange(event)}/>
          <br />

          <Button variant="primary" onClick={addChores}>Add Chores</Button>
        </>
      );
    }
    

