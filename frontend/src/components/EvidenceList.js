import React, { useState, useEffect } from 'react';
import { getEvidence } from '../services/BlockchainService';

const EvidenceList = () => {
  const [evidence, setEvidence] = useState(null);
  const [evidenceId, setEvidenceId] = useState('');

  const handleGetEvidence = async () => {
    try {
      const result = await getEvidence(evidenceId);
      setEvidence(result);
    } catch (error) {
      console.error('Error getting evidence:', error);
      alert('An error occurred while fetching evidence. Please try again.');
    }
  };

  return (
    <div>
      <h2>View Forensic Evidence</h2>
      <input type="text" placeholder="Enter Evidence ID" value={evidenceId} onChange={(e) => setEvidenceId(e.target.value)} />
      <button onClick={handleGetEvidence}>Get Evidence</button>
      {evidence && (
        <div>
          <h3>Evidence Details</h3>
          <p><strong>Name:</strong> {evidence.name}</p>
          <p><strong>Description:</strong> {evidence.description}</p>
        </div>
      )}
    </div>
  );
};

export default EvidenceList;