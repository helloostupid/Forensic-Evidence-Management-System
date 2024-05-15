const EvidenceManagement = artifacts.require("EvidenceManagement");

module.exports = async function(callback) {
  try {
    const evidenceManagementInstance = await EvidenceManagement.deployed();
    
    const accounts = await web3.eth.getAccounts();
    // const owner = accounts[0];
    // await evidenceManagementInstance.addEvidence("Hello Thief", { from: owner });
    const admin = accounts[0]; // Assuming the first account is the admin
    const evidenceId = 2;

    // Verify evidence 
    // await evidenceManagementInstance.verifyEvidence(evidenceId, { from: admin });

    // const newDescription = "I saw that thief near Ghatkopar Station";
    // await evidenceManagementInstance.updateEvidenceDescription(evidenceId, newDescription, { from: admin });

    const evidence = await evidenceManagementInstance.getEvidence(0);
    console.log("Retrieved Evidence:", evidence);

    // await evidenceManagementInstance.deleteEvidence(evidenceId, { from: admin });

    // const delEvidence = await evidenceManagementInstance.getEvidence(2);
    // console.log("Retrieved Evidence:", delEvidence);
    
    callback();
  } catch (error) {
    console.error(error);
    callback(error);
  }
};
