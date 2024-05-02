import Web3 from 'web3';
import ForensicEvidenceManagerABI from '../build/contracts/ForensicEvidenceManager.json';

const web3 = new Web3('http://localhost:8545'); // Connect to a local Ethereum node

const contractAddress = '0x1234567890123456789012345678901234567890'; // Replace with your actual contract address

const ForensicEvidenceManager = new web3.eth.Contract(
  ForensicEvidenceManagerABI.abi,
  contractAddress
);

export const addEvidence = async (name, description) => {
  const accounts = await web3.eth.getAccounts();
  await ForensicEvidenceManager.methods.addEvidence(name, description).send({ from: accounts[0] });
}

export const updateEvidence = async (id, name, description) => {
  const accounts = await web3.eth.getAccounts();
  await ForensicEvidenceManager.methods.updateEvidence(id, name, description).send({ from: accounts[0] });
}

export const deleteEvidence = async (id) => {
  const accounts = await web3.eth.getAccounts();
  await ForensicEvidenceManager.methods.deleteEvidence(id).send({ from: accounts[0] });
}

export const getEvidence = async (id) => {
  const evidence = await ForensicEvidenceManager.methods.getEvidence(id).call();
  return evidence;
}