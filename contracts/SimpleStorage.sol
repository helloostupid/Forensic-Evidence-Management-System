// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private _data;

    function setData(uint256 data) public {
        _data = data;
    }

    function getData() public view returns (uint256) {
        return _data;
    }
}