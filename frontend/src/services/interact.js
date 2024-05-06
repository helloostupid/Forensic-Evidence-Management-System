const { addEvidence, getEvidence, updateEvidence, deleteEvidence } = require('./BlockchainService.js');
const { Web3 } = require('web3');

async function main() {
  const web3 = new Web3('http://localhost:8545');

  const contractAddress = '0xdC32A43407d8c4919a07E6339C1030D9143F8bB9';
  const EvidenceManagement = new web3.eth.Contract(
    require('../../../build/contracts/EvidenceManagement.json').abi,
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