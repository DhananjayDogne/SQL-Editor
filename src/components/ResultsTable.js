import React from 'react';

const ResultsTable = ({ results }) => {
  if (results.length === 0) {
    return <p>No results to display.</p>;
  }

  const headers = Object.keys(results[0]);

  return (
    <table border="1" style={{ marginTop: '20px', width: '100%' }}>
      <thead>
        <tr>
          {headers.map((header, idx) => (
            <th key={idx}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
