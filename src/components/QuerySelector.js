import React from 'react';

const QuerySelector = ({ queries, onSelectQuery }) => {
  return (
    <div className='query-selector'>
      <label htmlFor="queries">Select Query:</label>
      <select id="queries" onChange={(e) => onSelectQuery(e.target.value)}>
        {queries.map((query, index) => (
          <option key={index} value={query.value}>
            {query.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuerySelector;
