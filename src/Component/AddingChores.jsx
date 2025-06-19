import React from 'react'
import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';






export default function AddingChores({chores, setChores}) {

    const [formData, setFormData]= useState({

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

    
      const [selectedCity, setSelectedCity] = useState(null);
      const Importance = [
          { name: 'New York'},
          { name: 'Rome' },
          { name: 'London' },
          { name: 'Istanbul' },
          { name: 'Paris' }
      ];

  return (        
        <>
        
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
    

