const { expect } = require("chai");
const { ethers } = require("hardhat");
const { beforeEach, describe } = require("mocha");

describe("TransactionTracker", function () {
  let owner;    //sender
  let receiver;
  let TransactionTracker;

  beforeEach(async function () {
    // Deploy the contract and get owner and receiver addresses
    [owner, receiver] = await ethers.getSigners();
    
    // const addresses = await ethers.getSigners().then(signers => signers.map(signer => signer.address));

    // console.log('ALL addresses',addresses);
    const TransactionTrackerFactory = await ethers.getContractFactory("TransactionTracker");
    TransactionTracker = await TransactionTrackerFactory.deploy();
    // await TransactionTracker.deployed();
    console.log('this is the reciever address' , receiver.address);
  });

  it("should initialize correctly", async function () {
    // Check if the owner is set correctly
    expect(await TransactionTracker.owner()).to.equal(owner.address);
  });

  it("should get balance", async function () {
    const balance = await TransactionTracker.getBalance();
    console.log("Contract balance:", balance.toString());
  });

  it("should get sender-to-receiver balance", async function () {
    const senderToReceiverBalance = await TransactionTracker.getSenderToReceiverBalance(owner.address, receiver.address);
    console.log("Sender to Receiver balance:", senderToReceiverBalance.toString());
  });

  it("should get total sent", async function () {
    const totalSent = await TransactionTracker.getTotalSent(owner.address);
    console.log("Total Sent by owner:", totalSent.toString());
  });

  it("should get total received", async function () {
    const totalReceived = await TransactionTracker.getTotalReceived(receiver.address);
    console.log("Total Received by receiver:", totalReceived.toString());
  });
});
