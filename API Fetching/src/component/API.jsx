import React, { useState } from 'react';
import axios from 'axios';

const ExcuseGenerator = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState('');
  const [error, setError] = useState(null);

  const fetchExcuse = (excuseType) => {
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`)
      .then((response) => {
        setGeneratedExcuse(response.data[0]?.excuse || 'No excuse found');
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching excuse:', error);
        setError('Error fetching excuse. Please try again later.');
      });
  };

  return (
    <div className="excuse-generator">
      <h1>Generate An Excuse</h1>
      <div className="buttons">
        <button onClick={() => fetchExcuse('party')}>Party</button>
        <button onClick={() => fetchExcuse('family')}>Family</button>
        <button onClick={() => fetchExcuse('office')}>Office</button>
      </div>
      {error && <p className="error">{error}</p>}
      <p className="excuse">{generatedExcuse}</p>
    </div>
  );
};

export default ExcuseGenerator;
