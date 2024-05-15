import React, { useState } from 'react';
import { addEvidence } from '../services/BlockchainService';

const ForensicEvidenceForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const evidenceDescription = `${name}: ${description}`;
      await addEvidence(evidenceDescription);
      alert('Forensic evidence added successfully!');
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Error adding evidence:', error);
      alert('An error occurred while adding evidence. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Forensic Evidence</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Add Evidence</button>
      </form>
    </div>
  );
};

export default ForensicEvidenceForm;