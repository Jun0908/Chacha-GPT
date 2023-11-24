
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract MedicalRecord2 {
    address public patient;
    address public doctor;
    uint private numUser;

    struct PersonalInfo {
        string name;
        string bloodType;
        uint lastUpdated;
        string lastUpdatedBy;
    }

    mapping(uint => PersonalInfo) private accounts;
    mapping(address => mapping(address => bool)) public requireMap;

    constructor() {
        doctor = 0x87296Eebb18fEdf0af3fa5Faf1F194BEddC05439;
        patient = 0xa085B290d21B610b2E80A2bedd7630A19dbc4Af3;
        numUser = 0;
    }

    modifier onlyDoctor {
        require(msg.sender == doctor, "Permission denied");
        _;
    }

    modifier onlyPatient {
        require(msg.sender == patient, "Permission denied");
        _;
    }

    modifier requirePermission(address _patient, address _doctor) {
        require(requireMap[_patient][_doctor] == true, "Permission denied");
        _;
    }

    function setInfo(string memory _name, string memory _bloodType) public onlyDoctor {
        accounts[numUser].name = _name;
        accounts[numUser].bloodType = _bloodType;
        numUser++;
    }

    function getInfo(uint _numUser) public view onlyPatient returns (string memory, string memory) {
        return (accounts[_numUser].name, accounts[_numUser].bloodType);
    }

    function setPermission(address _patient, address _doctor, bool _requirePermission) public onlyDoctor {
        requireMap[_patient][_doctor] = _requirePermission;
    }

    function updateInfo(string memory _name, string memory _bloodType) public requirePermission(patient, doctor) {
        require(numUser > 0, "No medical record found");
        accounts[numUser - 1].name = _name;
        accounts[numUser - 1].bloodType = _bloodType;
        accounts[numUser - 1].lastUpdated = block.timestamp;
        accounts[numUser - 1].lastUpdatedBy = "Doctor";
    }
}