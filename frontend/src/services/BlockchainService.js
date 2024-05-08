const { Web3 } = require('web3');
const EvidenceManagementABI = require('../contracts/EvidenceManagement.json');

const web3 = new Web3('http://localhost:8545');

const contractAddress = '0x3a0466Ad1dfC40e083ea9580Be3Af63Ddce1e4D0';  

const EvidenceManagement = new web3.eth.Contract(
  EvidenceManagementABI.abi,
  contractAddress
);

const addEvidence = async (description) => {
  const accounts = await web3.eth.getAccounts();
  await EvidenceManagement.methods.addEvidence(description).send({ from: accounts[0] });
}

const updateEvidence = async (id, description) => {
  const accounts = await web3.eth.getAccounts();
  await EvidenceManagement.methods.updateEvidenceDescription(id, description).send({ from: accounts[0] });
}

const deleteEvidence = async (id) => {
  const accounts = await web3.eth.getAccounts();
  await EvidenceManagement.methods.deleteEvidence(id).send({ from: accounts[0] });
}

const getEvidence = async (id) => {
  const evidence = await EvidenceManagement.methods.getEvidence(id).call();
  return evidence;
}

module.exports = {
  addEvidence,
  updateEvidence,
  deleteEvidence,
  getEvidence
};