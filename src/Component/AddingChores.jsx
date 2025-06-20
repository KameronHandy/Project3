import React from 'react'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';






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
        
          <DropdownButton value="" onClick={DropDownSelect} options=""  id="dropdown-basic-button" title="Importance">
            <Dropdown.Item options="high" name="Importance" >High</Dropdown.Item>
            <Dropdown.Item options="mid" name="Importance" >Mid</Dropdown.Item>
            <Dropdown.Item options="low" name="Importance" >Low</Dropdown.Item>
          </DropdownButton>
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
    

