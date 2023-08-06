import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [columns, setColumns] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedValue === '') {
      alert('Please select a value from the dropdown.');
      return;
    }


    setColumns((prevColumns) => {
      if (prevColumns.length === 0) {
        return [[selectedValue]];
      }

      const updatedColumns = [...prevColumns];
      let added = false;
      for (let column of updatedColumns) {
        if (column[column.length - 1] !== selectedValue) {
          column.push(selectedValue);
          added = true;
          break;
        }
      }

      if (!added) {
        updatedColumns.push([selectedValue]);
      }

      return updatedColumns;
    });

    setSelectedValue('');
  };

  return (
    <div>
      <h2>Head & Tail Page</h2>
      <nav className="nav bg-black my-2">
    <li className='nav-item'><Link to="/" className='nav-link'>Home </Link></li>
    <li className='nav-item'>  <Link to="/about" className='nav-link'>About</Link>
 </li>
    
    </nav>
   
      <form onSubmit={handleSubmit}>
      <select className='card text-bg-info mb-3 mx-5' value={selectedValue} onChange={handleSelectChange}>
          <option  className='card-body' value="">Select Value</option>
          <option  className='card-text' value="H">H</option>
          <option  className='card-text' value="T">T</option>
        </select>
        <button className='card text-bg-info mb-3 mx-5' type="submit">Submit</button>
       
        </form>
      <div className='bg-success p-2 text-white mb-3 mx-5'>

        {columns.map((column, index) => (
          <div key={index}>
            {column.map((value, idx) => (
              <span key={idx}>{value} </span>
            ))}
          </div>
        ))}
      </div>
     
    </div>
    
  );
};

export default HeadTail;
