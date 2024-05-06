const { Web3 } = require('web3');
const EvidenceManagementABI = require('../../../build/contracts/EvidenceManagement.json');

const web3 = new Web3('http://localhost:8545');

const contractAddress = '0xdC32A43407d8c4919a07E6339C1030D9143F8bB9';  

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