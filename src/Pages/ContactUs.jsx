import React from 'react'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function ContactUs() {


  const [Contact , setContact] = useState ([
    
    {FirstName: "" , LastName: "", Email: "", Text: ""},

  ])



  const [formData, setFormData]= useState({

    FirstName:"",
    LastName: "",
    Email : "",
    Text : ""
})

function handleChange(event){
    const {name,value} = (event.target)
    console.log(name,value)
    setFormData({...formData, [name]:value})
}

function addContact(){
    console.log(formData)
    setContact([...Contact, formData])
}




  return (

        <>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="First Name"
              name="FirstName"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event)=>handleChange(event)}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Last Name"
              name="LastName"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event)=>handleChange(event)}
            />
          </InputGroup>
    
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="E-mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="Email"
              onChange={(event)=>handleChange(event)}
            />
            <InputGroup.Text onChange={(event)=>handleChange(event)}>@example.com</InputGroup.Text>
          </InputGroup>

    
          <InputGroup>
            <InputGroup.Text>With textarea</InputGroup.Text>
            <Form.Control as="textarea" aria-label="Comments" name="Text" onChange={(event)=>handleChange(event)}/>
          </InputGroup>

          <Button variant="warning" onClick={addContact}>Submit</Button>
        </>
      );
    }
    
