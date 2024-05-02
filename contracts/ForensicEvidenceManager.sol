// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForensicEvidenceManager {
    struct Evidence {
        uint256 id;
        string name;
        string description;
        address owner;
        bool isDeleted;
        uint256 createdAt;
        uint256 updatedAt;
    }

    mapping(uint256 => Evidence) public evidenceRegistry;
    uint256 public evidenceCount;

    event EvidenceAdded(uint256 indexed id, string name, string description, address indexed owner);
    event EvidenceUpdated(uint256 indexed id, string name, string description);
    event EvidenceDeleted(uint256 indexed id);

    function addEvidence(string memory _name, string memory _description) public {
        uint256 id = evidenceCount++;
        evidenceRegistry[id] = Evidence(id, _name, _description, msg.sender, false, block.timestamp, block.timestamp);
        emit EvidenceAdded(id, _name, _description, msg.sender);
    }

    function updateEvidence(uint256 _id, string memory _name, string memory _description) public {
        require(_id < evidenceCount, "Invalid evidence ID");
        require(evidenceRegistry[_id].owner == msg.sender, "Only the owner can update the evidence");
        evidenceRegistry[_id].name = _name;
        evidenceRegistry[_id].description = _description;
        evidenceRegistry[_id].updatedAt = block.timestamp;
        emit EvidenceUpdated(_id, _name, _description);
    }

    function deleteEvidence(uint256 _id) public {
        require(_id < evidenceCount, "Invalid evidence ID");
        require(evidenceRegistry[_id].owner == msg.sender, "Only the owner can delete the evidence");
        evidenceRegistry[_id].isDeleted = true;
        emit EvidenceDeleted(_id);
    }

    function getEvidence(uint256 _id) public view returns (Evidence memory) {
        require(_id < evidenceCount, "Invalid evidence ID");
        require(!evidenceRegistry[_id].isDeleted, "Evidence has been deleted");
        return evidenceRegistry[_id];
    }
}