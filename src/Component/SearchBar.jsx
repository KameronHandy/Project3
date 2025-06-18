import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function SearchBar({chores,setChores}) {

    const [Searchstate, setSearchState] =useState ("")

    function SearchButton() {
        console.log(Searchstate)
        const search = chores.filter(chore=>chore.task.includes(Searchstate))
        setChores(search)
    }

  return (
    
    <InputGroup className="mb-3">
    <Form.Control
    name = "search"
    onChange={(event)=>(setSearchState(event.target.value))}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={(SearchButton)}>
      Chore Lookup
    </Button>
  </InputGroup>
  )

}
