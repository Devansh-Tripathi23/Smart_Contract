// const {Web3} = require('web3');
// const contractABI = require('../artifacts/contracts/Tracker.sol/TransactionTracker.json');

// async function main() {
//   const web3 = new Web3('https://sepolia-rollup.arbitrum.io/rpc');

//   // 0xe8faf1a3193b79ff93d3859d13d585d7bb24157f
//   const contractAddress = "0xe8faf1a3193b79ff93d3859d13d585d7bb24157f";

//   try {
//     const contract = new web3.eth.Contract(contractABI.abi, contractAddress);
//     console.log('Contract Address', contractAddress);
//     const balance = await contract.methods.getBalance().call();

//     console.log('Contract balance:', balance.toString());
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// main();




const {Web3} = require('web3');
// const EthereumTx = require('ethereumjs-tx').Transaction;

const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia-rollup.arbitrum.io/rpc'));

async function trackWalletBalance() {
  try {
    // Replace with your MetaMask wallet address
    const walletAddress = '0x8D3C011B8285a9a0dfb06CA5Fe23ca8046360984';

    // Get the balance of the wallet address
    const balanceWei = await web3.eth.getBalance(walletAddress);

    // Convert balance from Wei to Ether
    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');

    console.log('Wallet address:', walletAddress);
    console.log('Wallet balance:', balanceEther, 'ETH');
  } catch (error) {
    console.error('Error:', error.message);
  }
}
trackWalletBalance();












