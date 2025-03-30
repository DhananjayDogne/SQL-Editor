import React, { useState } from 'react';
import './App.css';
import QueryInput from './components/QueryInput';
import QuerySelector from './components/QuerySelector';
import Navbar from './components/Navbar';
import OutputTable from "./components/OutputTable"; 


import { BsFillPlayCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [query, setQuery] = useState('');
  const [table, setTable] = useState('');

  const queries = [
    { name: 'Show All customers', value: 'SELECT * FROM customers;' },
    { name: 'Show All categories', value: 'SELECT * FROM categories;' },
    { name: 'Show All employees', value: 'SELECT * FROM employees;' },
    { name: 'Show All shippers', value: 'SELECT * FROM shippers;' },
    { name: 'Show All suppliers', value: 'SELECT * FROM suppliers;' },
  ];

  const handleRunQuery = () => {
    if (query.trim() === '') {
      toast.warn('Please enter a query.');
      return;
    }

    const DATABASE_TABLES = ["customers", "categories", "employees", "shippers", "suppliers"];
    
    const foundTable = DATABASE_TABLES.find((t) => query.includes(t));

    if (foundTable) {
      setTable(foundTable);
      toast.success("🥳 Query Executed Successfully!");
    } else {
      toast.error("🤔 No table found!");
      setTable("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <ToastContainer />
        <main>
          <QuerySelector queries={queries} onSelectQuery={setQuery} />
          <QueryInput query={query} onQueryChange={setQuery} />
          
          <button onClick={handleRunQuery}>
            <span className='btn_icon'><BsFillPlayCircleFill /></span> Run Query
          </button>

          <OutputTable queriedTable={table} />
        </main>
      </div>
    </>
  );
};

export default App;
