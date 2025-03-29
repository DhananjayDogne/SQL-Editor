import React, { useState } from 'react';
import './App.css';
import QueryInput from './components/QueryInput';
import ResultsTable from './components/ResultsTable';
import QuerySelector from './components/QuerySelector';
import Navbar from './components/Navbar';

import { BsFillPlayCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const queries = [
    { name: 'Show All Users', value: 'SELECT * FROM users;' },
    { name: 'Show All Orders', value: 'SELECT * FROM orders;' },
    { name: 'Show Tables', value: "SELECT name FROM sqlite_master WHERE type='table';" },
  ];

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleRunQuery = async () => {
    if(query.trim() === '') {
      toast.warn('Please enter a query.');
      return;
    }
    toast.error("Server Not Running");
    // try {
    //   const response = await fetch('http://localhost:5000/query', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ query }),
    //   });
    //   const data = await response.json();
    //   if(data.error) {
    //     toast.error('Error executing the query 👾');
    //   } else {
    //     toast.success('Query executed successfully 🎉');
    //     setResults(data);
    //     // setQuery('');
    //   }
    // } catch (error) {
    //   toast.error('Error executing the query 👾');
    // }
  };

  const downloadCSV = () => {
    if (results.length === 0) {
      toast.warn('No data to download.🤔');
      return;
    }

    // Convert array of objects to CSV format
    const headers = Object.keys(results[0]).join(",") + "\n";
    const rows = results.map(row => Object.values(row).join(",")).join("\n");

    const csvContent = "data:text/csv;charset=utf-8," + headers + rows;
    const encodedUri = encodeURI(csvContent);
    
    // Create a temporary download link
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = "query_results.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />
    <div className="App">
     
      <ToastContainer />
      <main>


        <QuerySelector queries={queries} onSelectQuery={setQuery} />

        <QueryInput query={query} onQueryChange={handleQueryChange} />
        
        <button onClick={handleRunQuery} >
          <span className='btn_icon'><BsFillPlayCircleFill /></span> Run Query
        </button>

        <button  className="btn_download" onClick={downloadCSV}>
          📥 Download CSV
        </button>

        <ResultsTable results={results} />

      </main>
    </div>
    </>
  );
};

export default App;
