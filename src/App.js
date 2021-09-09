import React from 'react';
import './App.css';
import Form from './components/Form.js';

const handleSubmit = values => alert(JSON.stringify(values));
const initialValues = {}

function App() {
  return (
    <div>
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </div>
  );
}


export default App;
