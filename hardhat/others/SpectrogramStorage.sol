pragma solidity ^0.8.0;

contract SpectrogramStorage {
    string public spectrogramData;

    function storeSpectrogramData(string memory _spectrogramData) public {
        spectrogramData = _spectrogramData;
    }

    function getSpectrogramData() public view returns (string memory) {
        return spectrogramData;
    }
}