const EvidenceManagement = artifacts.require("EvidenceManagement");

module.exports = async function(callback) {
  try {
    const evidenceManagementInstance = await EvidenceManagement.deployed();
    
    const accounts = await web3.eth.getAccounts();
    const owner = accounts[0];
    await evidenceManagementInstance.addEvidence("I saw a man steal marshmallows from Dmart", { from: owner });

    const evidence = await evidenceManagementInstance.getEvidence(0);
    console.log("Retrieved Evidence:", evidence);
    
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
