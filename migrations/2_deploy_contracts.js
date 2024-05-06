var EvidenceManagement = artifacts.require("./EvidenceManagement.sol");

module.exports = function (deployer) {
  deployer.deploy(EvidenceManagement).then(function() {
    console.log("Contract deployed successfully! Yay!");
  }).catch(function(error) {
    console.error("Error deploying contract:", error);
  });
};
