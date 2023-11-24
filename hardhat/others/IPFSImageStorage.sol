//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract IPFSImageStorage {
    // CIDとアドレスを紐付けるためのマッピング
    mapping(string => address) private cidToAddress;

    // CIDの登録イベント
    event CIDRegistered(string cid, address indexed addr);

    // CIDを登録する関数
    function registerCID(string calldata cid) public {
        require(cidToAddress[cid] == address(0), "CID already registered");
        cidToAddress[cid] = msg.sender;
        emit CIDRegistered(cid, msg.sender);
    }

    // CIDに紐付けられたアドレスを取得する関数
    function getAddressForCID(string calldata cid) public view returns (address) {
        return cidToAddress[cid];
    }
}