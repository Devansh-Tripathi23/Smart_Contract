const { ethers } = require("hardhat");

async function main() {
  const TransactionTracker = await ethers.getContractFactory("TransactionTracke");
  const transactionTracker = await TransactionTracker.deploy();

  // Uncomment this line if you want to log information about the deployed contract instance
  // const deployedTransaction = await transactionTracker.deployed();

  // Log the deployed contract address
  console.log("TransactionTracker deployed to this =>  :", transactionTracker.target);

  // Exit with code 0 for success
  process.exit(200);
} 

main()
  .catch((error) => {
    console.error('this is my error ---->',error);
    // Exit with code 1 for error
    process.exit(404);
  });
