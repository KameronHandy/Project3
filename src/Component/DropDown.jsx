import React from 'react'
import {useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropDown(chores, setChores) {


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
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    <br />
    </>
  );
}

export default DropDown;