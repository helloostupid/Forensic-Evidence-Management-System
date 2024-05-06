// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract EvidenceManagement {
    struct Evidence {
        uint id;
        string description;
        address owner;
        bool verified;
        uint addedTimestamp;
        uint verifiedTimestamp;
    }

    mapping(uint => Evidence) public evidenceList;
    uint public evidenceCount;
    address public admin;

    event EvidenceAdded(uint id, string description, address owner, uint addedTimestamp);
    event EvidenceVerified(uint id, uint verifiedTimestamp);

    constructor() public {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    function addEvidence(string memory _description) public {
        evidenceList[evidenceCount] = Evidence(evidenceCount, _description, msg.sender, false, block.timestamp, 0);
        evidenceCount++;
        emit EvidenceAdded(evidenceCount, _description, msg.sender, block.timestamp);
    }

    function verifyEvidence(uint _id) public onlyAdmin {
        require(_id <= evidenceCount, "Invalid evidence ID");
        evidenceList[_id].verified = true;
        evidenceList[_id].verifiedTimestamp = block.timestamp;
        emit EvidenceVerified(_id, block.timestamp);
    }

    function getEvidence(uint _id) public view returns (string memory, address, bool, uint, uint) {
        require(_id <= evidenceCount, "Invalid evidence ID");
        Evidence storage evidence = evidenceList[_id];
        return (evidence.description, evidence.owner, evidence.verified, evidence.addedTimestamp, evidence.verifiedTimestamp);
    }

    function updateEvidenceDescription(uint _id, string memory _newDescription) public onlyAdmin {
        require(_id <= evidenceCount, "Invalid evidence ID");
        evidenceList[_id].description = _newDescription;
    }

    function deleteEvidence(uint _id) public onlyAdmin {
        require(_id <= evidenceCount, "Invalid evidence ID");
        delete evidenceList[_id];
        evidenceCount--;
    }

    // function getAllEvidences() public view returns (Evidence[] memory) {
    //     Evidence[] memory allEvidences = new Evidence[](evidenceCount);
    //     for (uint i = 1; i <= evidenceCount; i++) {
    //         allEvidences[i - 1] = evidenceList[i];
    //     }
    //     return allEvidences;
    // }
}