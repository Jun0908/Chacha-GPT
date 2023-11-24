//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleMed2 {
    address public patient;
    address public doctor;

    constructor() {
        patient = address(0);  // 初期値は0アドレス（ログインしていない状態）
        doctor = address(0);
    }

    function loginAsPatient() public {
        require(msg.sender == 0xa085B290d21B610b2E80A2bedd7630A19dbc4Af3, "Invalid patient address");  // 指定された患者アドレスでのみログインを許可する
        patient = msg.sender;
    }

    function loginAsDoctor() public {
        require(msg.sender == 0x87296Eebb18fEdf0af3fa5Faf1F194BEddC05439, "Invalid doctor address");  // 指定された医者アドレスでのみログインを許可する
        doctor = msg.sender;
    }

    function getFrontPageMessage() public view returns (string memory) {
        if (msg.sender == patient) {
            return "patient";  // 患者でログインした場合のメッセージ
        } else if (msg.sender == doctor) {
            return "doctor";  // 医者でログインした場合のメッセージ
        } else {
            return "";  // ログインしていない場合は空のメッセージ
        }
    }
}