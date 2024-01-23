// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0 ;
import 'hardhat/console.sol';

contract TransactionTracker {
    address public owner;

    mapping(address => mapping(address => uint256)) public senderToReceiverBalance;  // first address from sender & the second address from reciever
    mapping(address => uint256) public balances;
    mapping(address => uint256) public totalSent;
    mapping(address => uint256) public totalReceived;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // function transfer(address to, uint256 value) external onlyOwner {
    //     require(to != address(0), "Invalid receiver address");
    //     require(value > 0, "Invalid transfer value");

    //     // Transfer funds
    //     payable(to).transfer(value);

    //     // Update balances
    //     balances[to] += value;
    //     senderToReceiverBalance[msg.sender][to] += value;
    //     totalSent[msg.sender] += value;
    //     totalReceived[to] += value;

    //     // Emit Transfer event
    //     emit Transfer(owner, to, value);
    // }

    function getBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function getSenderToReceiverBalance(address sender, address receiver) external view returns (uint256) {
        console.log('this is the sender to reciever balance ');
        return senderToReceiverBalance[sender][receiver];  // from specific address =>reciever
    }

    function getTotalSent(address sender) external view returns (uint256) {
        console.log('total data sent', msg.sender);
        return totalSent[sender];
        
    }

    function getTotalReceived(address receiver) external view returns (uint256) {
        return totalReceived[receiver];
    }
}

