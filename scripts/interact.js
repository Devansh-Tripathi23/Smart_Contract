const {Web3} = require('web3');
const contractABI = require('../artifacts/contracts/Tracker.sol/TransactionTracker.json');


async function main() {
  const web3 = new Web3('https://sepolia-rollup.arbitrum.io/rpc');

  // 0xe8faf1a3193b79ff93d3859d13d585d7bb24157f
  const contractAddress = "0xe8faf1a3193b79ff93d3859d13d585d7bb24157f";

  try {
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress);
    const balance = await contract.methods.getBalance().call();

    console.log('Contract balance:', balance.toString());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();



