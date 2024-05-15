const { Web3 } = require('web3');
const EvidenceManagementABI = require('../contracts/EvidenceManagement.json');

const web3 = new Web3('http://localhost:8545');

const contractAddress = '0x1196abA6A4Fc9dF9Bac689ebf10fCb8A65d5d23C';  

const EvidenceManagement = new web3.eth.Contract(
  EvidenceManagementABI.abi,
  contractAddress
);

const addEvidence = async (description) => {
  const accounts = await web3.eth.getAccounts();
  const gasLimit = 6721974;
  await EvidenceManagement.methods.addEvidence(description).send({ from: accounts[2], gas: gasLimit });
}

// const updateEvidence = async (id, description) => {
//   const accounts = await web3.eth.getAccounts();
//   await EvidenceManagement.methods.updateEvidenceDescription(id, description).send({ from: accounts[1] });
// }

// const deleteEvidence = async (id) => {
//   const accounts = await web3.eth.getAccounts();
//   await EvidenceManagement.methods.deleteEvidence(id).send({ from: accounts[1] });
// }

const getEvidence = async (id) => {
  const evidence = await EvidenceManagement.methods.getEvidence(id).call();
  console.log(evidence);
  return evidence;
}

module.exports = {
  addEvidence,
  // updateEvidence,
  // deleteEvidence,
  getEvidence
};