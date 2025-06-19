import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function DropDown() {

    function MyDropdown() {
        const [chores, setChores] = useState('');
        const options = [
          { value: 'option1', label: 'Option 1 Text' },
          { value: 'option2', label: 'Option 2 Text' },
          { value: 'option3', label: 'Option 3 Text' },
        ];
    
        const handleChange = (event) => {
          setSelectedValue(event.target.value);
        };
    
        const selectedOptionLabel = options.find(opt => opt.value === selectedValue)?.label || 'No selection';

  return (
    <>
    <Dropdown value={selectedValue} onChange={handleChange}>
    <Dropdown.Toggle value="" variant="success" id="dropdown-basic">
        Importance
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item value="High">High</Dropdown.Item>
        <Dropdown.Item value="Mid">Mid</Dropdown.Item>
        <Dropdown.Item value="Low">Low</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <br />
    </>
  )
}



    return (
      <div>
        <select value={selectedValue} onChange={handleChange}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p>Selected: {selectedOptionLabel}</p>
      </div>
    );
  }