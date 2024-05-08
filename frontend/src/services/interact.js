const { addEvidence, getEvidence, updateEvidence, deleteEvidence } = require('./BlockchainService.js');
const { Web3 } = require('web3');

async function main() {
  const web3 = new Web3('http://localhost:8545');

  const contractAddress = '0x3a0466Ad1dfC40e083ea9580Be3Af63Ddce1e4D0';
  const EvidenceManagement = new web3.eth.Contract(
    require('../contracts/EvidenceManagement.json').abi,
    contractAddress
  );

  // Add new evidence
  async function addNewEvidence() {
    const description = 'I saw a man steal marshmallows from Vidyavihar Dmart';
    await addEvidence(EvidenceManagement, description);
    console.log('Evidence added successfully');
  }

  // Retrieve evidence details
  async function getEvidenceDetails() {
    const evidenceId = 1; // Replace with the ID of the evidence you want to retrieve
    const evidence = await getEvidence(EvidenceManagement, evidenceId);
    console.log('Evidence Details:', evidence);
  }

  // Update evidence description
  async function updateEvidenceDescription() {
    const evidenceId = 1; // Replace with the ID of the evidence you want to update
    const newDescription = 'Updated evidence description';
    await updateEvidence(EvidenceManagement, evidenceId, newDescription);
    console.log('Evidence description updated successfully');
  }

  // Delete evidence
  async function deleteEvidenceRecord() {
    const evidenceId = 1; // Replace with the ID of the evidence you want to delete
    await deleteEvidence(EvidenceManagement, evidenceId);
    console.log('Evidence deleted successfully');
  }

  await addNewEvidence();
  await getEvidenceDetails();
//   await updateEvidenceDescription();
//   await deleteEvidenceRecord();
}

main();