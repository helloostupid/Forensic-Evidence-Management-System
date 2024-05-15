import React, { useState } from 'react';
import { getEvidence } from '../services/BlockchainService';

const EvidenceList = () => {
  const [evidence, setEvidence] = useState(null);
  const [evidenceId, setEvidenceId] = useState('');

  const handleGetEvidence = async () => {
    try {
      const result = await getEvidence(evidenceId);
      console.log(result);
      setEvidence(result);
      console.log(evidence);
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
        <ul>
          <li>Description: {typeof evidence[0] === 'bigint' ? evidence[0].toString() : evidence[0]}</li>
          <li>Sender's Address: {typeof evidence[1] === 'bigint' ? evidence[1].toString() : evidence[1]}</li>
          <li>Verified: {typeof evidence[2] === 'boolean' ? evidence[2].toString() : evidence[2]}</li>
          <li>Added Timestamp: {typeof evidence[3] === 'bigint' ? evidence[3].toString() : evidence[3]}</li>
          <li>Verified Timestamp: {typeof evidence[4] === 'bigint' ? evidence[4].toString() : evidence[4]}</li>
        </ul>
      </div>
    )}
    </div>
  );
};

export default EvidenceList;