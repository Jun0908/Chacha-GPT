//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

//import "../../../node_modules/hardhat/console.sol";

contract SimpleMed1 {
    struct PersonalInfo {
        string name;
        string bloodType;
    }

    mapping(address => PersonalInfo) public personalInfos;

    function setPersonalInfo(string memory _name, string memory _bloodType) public {
        personalInfos[msg.sender] = PersonalInfo(_name, _bloodType);
    }

    function getPersonalInfo(address _address) public view returns (string memory, string memory) {
        PersonalInfo memory info = personalInfos[_address];
        return (info.name, info.bloodType);
    }
}